// アンビエント背景①：Drift
// ぼんやりした光の塊が数個、ゆっくり漂って重なり合う。
// 1フレームに描くのは放射グラデーション数個だけなので軽い（fps は設定で制限）。
// 連動：秒が変わるたびに光がふわっと膨らみ、分が変わると大きく明るくなる。
//       光の脈動に合わせて時計の文字も呼吸するように明るさが変わる。
// 色は時間帯（朝・昼・夕・夜）でゆるやかに移り変わり、雨や雪の日は少し落ち着いた色になる。

import { createPulse } from './pulse';

// 時間帯ごとのパレット [r, g, b]
const PALETTES = [
  { hour: 0, colors: [[40, 50, 120], [70, 40, 110], [20, 90, 110]] }, // 深夜
  { hour: 6, colors: [[200, 120, 120], [120, 110, 180], [230, 170, 110]] }, // 朝
  { hour: 12, colors: [[90, 160, 200], [120, 200, 170], [170, 200, 120]] }, // 昼
  { hour: 18, colors: [[220, 110, 80], [150, 70, 130], [240, 160, 90]] }, // 夕
  { hour: 24, colors: [[40, 50, 120], [70, 40, 110], [20, 90, 110]] }, // 深夜（ループ用）
];

const lerp = (a, b, t) => a + (b - a) * t;
const mixColor = (c1, c2, t) => c1.map((v, i) => lerp(v, c2[i], t));

// 現在時刻（分単位）からパレットを補間
const paletteAt = (date) => {
  const h = date.getHours() + date.getMinutes() / 60;
  let i = 0;
  while (PALETTES[i + 1].hour <= h) i += 1;
  const a = PALETTES[i];
  const b = PALETTES[i + 1];
  const t = (h - a.hour) / (b.hour - a.hour);
  const smooth = t * t * (3 - 2 * t);
  return a.colors.map((c, k) => mixColor(c, b.colors[k], smooth));
};

const drift = {
  id: 'drift',
  name: 'Drift',
  sketch: (getData) => (p) => {
    const BLOBS = 5;
    let seeds = [];
    const pulse = createPulse(p);

    p.setup = () => {
      p.pixelDensity(1);
      p.createCanvas(p.windowWidth, p.windowHeight);
      seeds = Array.from({ length: BLOBS }, (_, i) => ({ ox: i * 100 + 11, oy: i * 100 + 57, os: i * 100 + 91 }));
    };

    p.draw = () => {
      const { now, weather, interact, setOutput } = getData();
      const pl = interact ? pulse(now) : { sec: 0, min: 0 };
      const swell = pl.sec * 0.35 + pl.min;
      const calm = weather && ['rain', 'snow', 'fog', 'storm'].includes(weather.type);
      const palette = paletteAt(now);
      const ctx = p.drawingContext;
      const t = p.millis() * 0.00004; // とてもゆっくり
      const size = Math.max(p.width, p.height);

      p.background(8, 8, 12);
      ctx.save();
      ctx.globalCompositeOperation = 'lighter';
      seeds.forEach((s, i) => {
        const x = p.noise(s.ox, t) * p.width * 1.4 - p.width * 0.2;
        const y = p.noise(s.oy, t) * p.height * 1.4 - p.height * 0.2;
        const r = size * (0.25 + p.noise(s.os, t * 1.5) * 0.35) * (1 + swell * 0.06);
        const [cr, cg, cb] = palette[i % palette.length];
        const alpha = (calm ? 0.22 : 0.32) * (1 + swell * 0.45);
        const g = ctx.createRadialGradient(x, y, 0, x, y, r);
        g.addColorStop(0, `rgba(${cr | 0}, ${cg | 0}, ${cb | 0}, ${alpha})`);
        g.addColorStop(1, `rgba(${cr | 0}, ${cg | 0}, ${cb | 0}, 0)`);
        ctx.fillStyle = g;
        ctx.fillRect(x - r, y - r, r * 2, r * 2);
      });
      ctx.restore();
      // 背景 → 時計：文字の明るさ（0〜1）を返す
      if (interact && setOutput) setOutput({ glow: Math.min(1, swell), offsetY: 0 });
    };

    p.windowResized = () => p.resizeCanvas(p.windowWidth, p.windowHeight);
  },
};

export default drift;
