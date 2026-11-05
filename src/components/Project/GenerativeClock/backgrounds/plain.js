// 背景なし（単色）
const plain = {
  id: 'plain',
  name: 'Plain',
  sketch: () => (p) => {
    p.setup = () => {
      p.createCanvas(p.windowWidth, p.windowHeight);
      p.noLoop();
      p.background(10);
    };
    p.windowResized = () => {
      p.resizeCanvas(p.windowWidth, p.windowHeight);
      p.background(10);
    };
  },
};

export default plain;
