// アンビエント背景②：Tide
// 細い線が何本も重なり、潮の満ち引きのようにゆっくりうねる。
// 線の数・頂点数を抑え、fps も設定で制限して軽くしている。
// 連動：秒が変わるたびに中央から左右へ小さな波が走り、分が変わると大きな波になる。
//       時計の文字は中央の線のうねりに合わせてわずかに上下する。
// 1分周期で全体がわずかに上下し、秒の流れをさりげなく感じさせる。
import { createPulse } from './pulse';

const tide = {
  id: 'tide',
  name: 'Tide',
  sketch: (getData) => (p) => {
    const LINES = 28;
    const STEP = 24; // 頂点の間隔(px)
    const pulse = createPulse(p);

    p.setup = () => {
      p.pixelDensity(1);
      p.createCanvas(p.windowWidth, p.windowHeight);
      p.noFill();
    };

    p.draw = () => {
      const { now, interact, setOutput } = getData();
      const pl = interact ? pulse(now) : { sec: 0, min: 0, secElapsed: Infinity };
      // 中央から外へ走る波の位置と高さ
      const waveX = (pl.secElapsed / 1000) * p.width * 0.6;
      const waveH = p.height * (0.012 * pl.sec + 0.04 * pl.min);
      const cx = p.width / 2;
      const t = p.millis() * 0.00005;
      const sec = now.getSeconds() + now.getMilliseconds() / 1000;
      const breath = Math.sin((sec / 60) * Math.PI * 2) * p.height * 0.015;

      p.background(9, 10, 12);
      const amp = p.height * 0.18;
      for (let i = 0; i < LINES; i += 1) {
        const k = i / (LINES - 1);
        const baseY = p.height * (0.25 + k * 0.5) + breath;
        // 中央付近の線ほど少し明るく
        const a = 24 + (1 - Math.abs(k - 0.5) * 2) * 50;
        if (i === Math.floor(LINES / 2)) p.stroke(173, 255, 47, 70);
        else p.stroke(220, 225, 235, a);
        p.strokeWeight(1);
        p.beginShape();
        for (let x = -STEP; x <= p.width + STEP; x += STEP) {
          const n = p.noise(x * 0.0016, k * 0.9, t);
          const d = Math.abs(x - cx) - waveX;
          const ripple = waveH > 0.05 ? waveH * Math.exp(-(d * d) / 6000) * (1 - Math.abs(k - 0.5)) : 0;
          p.vertex(x, baseY + (n - 0.5) * amp * 2 - ripple);
        }
        p.endShape();
      }
      // 背景 → 時計：中央の線の画面中央でのうねりを、文字の上下オフセット(px)として返す
      if (interact && setOutput) {
        const n = p.noise(cx * 0.0016, 0.5 * 0.9, t);
        setOutput({ glow: pl.sec * 0.4 + pl.min, offsetY: (n - 0.5) * amp * 0.25 + breath * 0.5 });
      }
    };

    p.windowResized = () => p.resizeCanvas(p.windowWidth, p.windowHeight);
  },
};

export default tide;
