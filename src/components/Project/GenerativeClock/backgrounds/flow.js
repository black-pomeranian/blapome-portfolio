// 仮背景①：ノイズの流れ場を漂うパーティクル
// 色相は時刻（時）、速さは秒の進みに連動。
const flow = {
  id: 'flow',
  name: 'Flow（仮）',
  sketch: (getData) => (p) => {
    let particles = [];
    const COUNT = 700;

    const spawn = () => ({ x: p.random(p.width), y: p.random(p.height), life: p.random(80, 300) });

    p.setup = () => {
      p.pixelDensity(1);
      p.createCanvas(p.windowWidth, p.windowHeight);
      p.background(10);
      particles = Array.from({ length: COUNT }, spawn);
    };

    p.draw = () => {
      const { now } = getData();
      const sec = now.getSeconds() + now.getMilliseconds() / 1000;
      p.noStroke();
      p.fill(10, 18);
      p.rect(0, 0, p.width, p.height);

      const t = p.frameCount * 0.002;
      const speed = 1 + Math.sin((sec / 60) * Math.PI * 2) * 0.5;
      p.stroke(173, 255, 47, 90);
      p.strokeWeight(1.2);
      particles.forEach((pt, i) => {
        const a = p.noise(pt.x * 0.0018, pt.y * 0.0018, t) * Math.PI * 4;
        const nx = pt.x + Math.cos(a) * speed * 1.6;
        const ny = pt.y + Math.sin(a) * speed * 1.6;
        p.line(pt.x, pt.y, nx, ny);
        pt.x = nx;
        pt.y = ny;
        pt.life -= 1;
        if (pt.life < 0 || nx < 0 || nx > p.width || ny < 0 || ny > p.height) particles[i] = spawn();
      });
    };

    p.windowResized = () => {
      p.resizeCanvas(p.windowWidth, p.windowHeight);
      p.background(10);
    };
  },
};

export default flow;
