// 時計 → 背景の連動用ヘルパー。
// 秒・分が切り替わった瞬間に 1 になり、そこから滑らかに 0 へ減衰する値を返す。
// 毎フレームの計算は数回の掛け算だけなので軽い。
export const createPulse = (p) => {
  let lastSec = -1;
  let lastMin = -1;
  let secAt = -Infinity;
  let minAt = -Infinity;
  return (now) => {
    const t = p.millis();
    const s = now.getSeconds();
    const m = now.getMinutes();
    if (s !== lastSec) {
      if (lastSec !== -1) secAt = t;
      lastSec = s;
    }
    if (m !== lastMin) {
      if (lastMin !== -1) minAt = t;
      lastMin = m;
    }
    return {
      sec: Math.exp(-(t - secAt) / 450), // 秒ごとの小さな脈動
      min: Math.exp(-(t - minAt) / 2500), // 分が変わったときの大きめの脈動
      secElapsed: t - secAt,
    };
  };
};
