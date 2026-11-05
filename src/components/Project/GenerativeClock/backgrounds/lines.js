// 仮背景②：トップページの縦線グリッドを時計用にアレンジ
// 天気に応じて揺らぎ方が変わる（雨・雪は下方向に流れる）。
const lines = {
  id: 'lines',
  name: 'Lines（仮）',
  sketch: (getData) => (p) => {
    let tx = 0;
    let ty = 10000;

    p.setup = () => {
      p.pixelDensity(1);
      p.createCanvas(p.windowWidth, p.windowHeight);
    };

    p.draw = () => {
      const { weather } = getData();
      const falling = weather && (weather.type === 'rain' || weather.type === 'snow');
      p.background(12);
      const cx = p.noise(tx) * p.width;
      const cy = p.noise(ty) * p.height;
      tx += 0.004;
      ty += 0.004;

      const spacing = 18;
      const seg = 18;
      const radius = Math.max(p.width, p.height) / 2;
      const drift = falling ? (p.frameCount * 1.5) % seg : 0;
      p.stroke(230);
      for (let x = 0; x <= p.width; x += spacing) {
        for (let y = -seg; y <= p.height; y += seg) {
          const d = p.dist(x, y, cx, cy);
          const w = p.map(d, 0, radius, 8, 0.3, true);
          p.strokeWeight(w);
          p.line(x, y + drift, x, y + drift + seg * 0.6);
        }
      }
    };

    p.windowResized = () => p.resizeCanvas(p.windowWidth, p.windowHeight);
  },
};

export default lines;
