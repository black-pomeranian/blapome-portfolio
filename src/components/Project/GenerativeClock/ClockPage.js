import React, { useCallback, useEffect, useRef, useState } from 'react';
import Background from './Background';
import SettingsPanel from './SettingsPanel';
import { ELEMENTS, POSITIONS, fontCss, loadSettings, saveSettings } from './settings';
import { useWeather } from './weather';
import { useKeepAwake, useHomeScreenApp } from './device';
import WeatherIcon from './WeatherIcon';
import './GenerativeClock.css';

const UI_HIDE_MS = 4000;
const pad = (n) => String(n).padStart(2, '0');

const formatTime = (d, { hour12, showSeconds }) => {
  let h = d.getHours();
  let suffix = '';
  if (hour12) {
    suffix = h < 12 ? ' AM' : ' PM';
    h = h % 12 || 12;
  }
  return `${pad(h)}:${pad(d.getMinutes())}${showSeconds ? `:${pad(d.getSeconds())}` : ''}${suffix}`;
};

const formatDate = (d) =>
  `${d.getFullYear()}.${pad(d.getMonth() + 1)}.${pad(d.getDate())} ${['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'][d.getDay()]}`;

const ClockPage = () => {
  const [settings, setSettings] = useState(loadSettings);
  const [now, setNow] = useState(() => new Date());
  const [uiVisible, setUiVisible] = useState(false);
  const [panelOpen, setPanelOpen] = useState(false);
  const hideTimer = useRef(null);
  const layerRef = useRef(null);
  const weather = useWeather(settings.location);

  useKeepAwake(settings.keepAwake);
  useHomeScreenApp();

  // 背景 → 時計の連動。React の再描画を通さず CSS 変数を直接書き換える
  // （opacity と transform だけなので GPU 合成で済み、軽い）
  const lastOut = useRef({ glow: -1, offsetY: -1 });
  const setOutput = useCallback(({ glow = 0, offsetY = 0 }) => {
    const el = layerRef.current;
    if (!el) return;
    const prev = lastOut.current;
    if (Math.abs(prev.glow - glow) > 0.01) {
      el.style.setProperty('--gclock-glow', glow.toFixed(3));
      prev.glow = glow;
    }
    if (Math.abs(prev.offsetY - offsetY) > 0.2) {
      el.style.setProperty('--gclock-offset', `${offsetY.toFixed(1)}px`);
      prev.offsetY = offsetY;
    }
  }, []);

  useEffect(() => {
    if (!settings.interact) setOutput({ glow: 0, offsetY: 0 });
  }, [settings.interact, settings.background, setOutput]);

  // 背景スケッチに渡すデータ（毎フレーム参照されるので ref で共有）
  const data = { now, weather, interact: settings.interact, setOutput };
  const dataRef = useRef(data);
  dataRef.current = data;

  useEffect(() => saveSettings(settings), [settings]);

  // 秒の切り替わりに合わせて更新
  useEffect(() => {
    let id;
    const tick = () => {
      const d = new Date();
      setNow(d);
      id = setTimeout(tick, 1000 - d.getMilliseconds());
    };
    tick();
    return () => clearTimeout(id);
  }, []);

  // ページ全体（ヘッダー・サイト共通背景なし）用に body を固定
  useEffect(() => {
    // サイト共通のノイズ（body::before）もこのページでは外す
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.body.classList.add('gclock-page');
    return () => {
      document.body.style.overflow = prev;
      document.body.classList.remove('gclock-page');
    };
  }, []);

  const showUi = useCallback(() => {
    setUiVisible(true);
    clearTimeout(hideTimer.current);
    hideTimer.current = setTimeout(() => setUiVisible(false), UI_HIDE_MS);
  }, []);

  useEffect(() => () => clearTimeout(hideTimer.current), []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setPanelOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const tempText = () => {
    const t = settings.tempUnit === 'F' ? weather.temperature * 1.8 + 32 : weather.temperature;
    return `${Math.round(t)}°${settings.tempUnit}`;
  };

  // 天気は取得できたときだけ表示（位置情報の許可がない・取得失敗・読み込み中は非表示）
  const weatherReady = weather.status === 'ok';

  const texts = {
    time: formatTime(now, settings),
    date: formatDate(now),
    weather: weatherReady && (
      <span className="gclock-weather">
        <WeatherIcon type={weather.type} isDay={weather.isDay !== false} label={`${weather.ja} / ${weather.en}`} />
        <span>{tempText()}</span>
      </span>
    ),
  };
  const isShown = (id) => settings.elements[id].visible && (id !== 'weather' || weatherReady);

  return (
    <main
      className={`gclock ${uiVisible || panelOpen ? '' : 'gclock-cursor-hidden'}`}
      onClick={showUi}
      onMouseMove={uiVisible ? showUi : undefined}
      style={{ color: settings.color }}
    >
      <h1 className="visually-hidden">Generative Clock</h1>
      <Background backgroundId={settings.background} dataRef={dataRef} fps={settings.fps} />

      <div className="gclock-layer" ref={layerRef}>
        {POSITIONS.map((pos) => (
          <div key={pos.id} className={`gclock-zone gclock-zone-${pos.id}`}>
            {ELEMENTS.filter(({ id }) => isShown(id) && settings.elements[id].position === pos.id).map(({ id }) => (
              <div
                key={id}
                className={`gclock-text gclock-text-${id}`}
                style={{ fontFamily: fontCss(settings.elements[id].font), fontSize: `${settings.elements[id].size}vmin` }}
                {...(id === 'time' ? { role: 'timer', 'aria-live': 'off' } : {})}
              >
                {texts[id]}
              </div>
            ))}
          </div>
        ))}
      </div>

      {uiVisible && !panelOpen && (
        <button
          type="button"
          className="gclock-icon-btn gclock-settings-btn"
          onClick={(e) => {
            e.stopPropagation();
            setPanelOpen(true);
          }}
          aria-label="設定を開く"
        >
          <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
            <path
              fill="currentColor"
              d="M19.14 12.94a7.07 7.07 0 0 0 0-1.88l2.03-1.58a.5.5 0 0 0 .12-.64l-1.92-3.32a.5.5 0 0 0-.6-.22l-2.39.96a7.03 7.03 0 0 0-1.63-.94l-.36-2.54a.5.5 0 0 0-.5-.42h-3.84a.5.5 0 0 0-.5.42l-.36 2.54c-.59.24-1.13.56-1.63.94l-2.39-.96a.5.5 0 0 0-.6.22L2.71 8.84a.5.5 0 0 0 .12.64l2.03 1.58a7.07 7.07 0 0 0 0 1.88l-2.03 1.58a.5.5 0 0 0-.12.64l1.92 3.32c.13.22.39.31.6.22l2.39-.96c.5.38 1.04.7 1.63.94l.36 2.54c.04.24.25.42.5.42h3.84c.25 0 .46-.18.5-.42l.36-2.54c.59-.24 1.13-.56 1.63-.94l2.39.96c.22.09.47 0 .6-.22l1.92-3.32a.5.5 0 0 0-.12-.64zM12 15.5A3.5 3.5 0 1 1 12 8.5a3.5 3.5 0 0 1 0 7z"
            />
          </svg>
        </button>
      )}

      {panelOpen && <SettingsPanel settings={settings} onChange={setSettings} onClose={() => setPanelOpen(false)} />}
    </main>
  );
};

export default ClockPage;
