import React, { useEffect, useRef } from 'react';
import p5 from 'p5';
import { findBackground } from './backgrounds';

// p5 v2 は setup が非同期で始まるため、canvas 生成前に remove() すると
// window の resize 等のリスナーが外れずに残る（開発時の StrictMode の二重マウントで発生）。
// 破棄済みのインスタンスが setup / draw / windowResized を実行しないようにガードする。
const guardSketch = (sketch, isAlive) => (p) => {
  sketch(p);
  const setup = p.setup;
  p.setup = (...args) => {
    // 破棄後に setup が走った場合は、ここで改めて片付ける（この時点なら listener も外せる）
    if (!isAlive()) return p.remove();
    return setup?.(...args);
  };
  ['draw', 'windowResized'].forEach((name) => {
    const fn = p[name];
    if (typeof fn === 'function') {
      p[name] = (...args) => (isAlive() ? fn(...args) : undefined);
    }
  });
};

// 選択された背景スケッチを p5 のインスタンスモードで描画する。
// 背景を切り替えると古いインスタンスを破棄して作り直す。
const Background = ({ backgroundId, dataRef }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (navigator.userAgent === 'ReactSnap' || !containerRef.current) return undefined;
    let alive = true;
    const bg = findBackground(backgroundId);
    const instance = new p5(
      guardSketch(bg.sketch(() => dataRef.current), () => alive),
      containerRef.current
    );
    return () => {
      alive = false;
      instance.remove();
    };
  }, [backgroundId, dataRef]);

  return <div ref={containerRef} className="gclock-bg" aria-hidden="true" />;
};

export default Background;
