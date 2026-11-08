import React, { useEffect, useRef } from 'react';
import p5 from 'p5';
import { findBackground } from './backgrounds';

// p5 v2 は setup が非同期で始まるため、canvas 生成前に remove() すると
// window の resize 等のリスナーが外れずに残る（開発時の StrictMode の二重マウントで発生）。
// 破棄済みのインスタンスが setup / draw / windowResized を実行しないようにガードする。
const guardSketch = (sketch, isAlive, getFps) => (p) => {
  sketch(p);
  const setup = p.setup;
  p.setup = (...args) => {
    // 破棄後に setup が走った場合は、ここで改めて片付ける（この時点なら listener も外せる）
    if (!isAlive()) return p.remove();
    const result = setup?.(...args);
    p.frameRate(getFps()); // iPad などでの常時表示向けに fps を制限（電池・発熱対策）
    return result;
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
const Background = ({ backgroundId, dataRef, fps }) => {
  const containerRef = useRef(null);
  const instanceRef = useRef(null);
  const fpsRef = useRef(fps);
  fpsRef.current = fps;

  useEffect(() => {
    if (navigator.userAgent === 'ReactSnap' || !containerRef.current) return undefined;
    let alive = true;
    const bg = findBackground(backgroundId);
    const instance = new p5(
      guardSketch(bg.sketch(() => dataRef.current), () => alive, () => fpsRef.current),
      containerRef.current
    );
    instanceRef.current = instance;
    return () => {
      alive = false;
      instanceRef.current = null;
      instance.remove();
    };
  }, [backgroundId, dataRef]);

  // fps の変更は作り直さずに反映
  useEffect(() => {
    instanceRef.current?.frameRate(fps);
  }, [fps]);

  return <div ref={containerRef} className="gclock-bg" aria-hidden="true" />;
};

export default Background;
