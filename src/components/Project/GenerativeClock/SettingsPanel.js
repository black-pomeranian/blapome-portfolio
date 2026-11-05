import React from 'react';
import { Link } from 'react-router-dom';
import { BACKGROUNDS } from './backgrounds';
import { DEFAULT_SETTINGS, ELEMENTS, FONTS, POSITIONS } from './settings';

const SettingsPanel = ({ settings, onChange, onClose }) => {
  const set = (patch) => onChange({ ...settings, ...patch });
  const setEl = (id, patch) =>
    onChange({ ...settings, elements: { ...settings.elements, [id]: { ...settings.elements[id], ...patch } } });

  const toggleFullscreen = () => {
    if (document.fullscreenElement) document.exitFullscreen();
    else document.documentElement.requestFullscreen?.();
  };

  return (
    <aside
      className="gclock-panel"
      role="dialog"
      aria-label="時計の設定"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="gclock-panel-head">
        <h2>Settings</h2>
        <button type="button" className="gclock-icon-btn" onClick={onClose} aria-label="設定を閉じる">×</button>
      </div>

      <section>
        <h3>背景</h3>
        <select value={settings.background} onChange={(e) => set({ background: e.target.value })}>
          {BACKGROUNDS.map((b) => (
            <option key={b.id} value={b.id}>{b.name}</option>
          ))}
        </select>
      </section>

      {ELEMENTS.map(({ id, label }) => {
        const el = settings.elements[id];
        return (
          <section key={id}>
            <label className="gclock-row">
              <input type="checkbox" checked={el.visible} onChange={(e) => setEl(id, { visible: e.target.checked })} />
              <h3>{label}</h3>
            </label>
            {el.visible && (
              <>
                <div className="gclock-pos-grid" role="radiogroup" aria-label={`${label}の位置`}>
                  {POSITIONS.map((pos) => (
                    <button
                      key={pos.id}
                      type="button"
                      role="radio"
                      aria-checked={el.position === pos.id}
                      aria-label={pos.label}
                      title={pos.label}
                      className={el.position === pos.id ? 'active' : ''}
                      onClick={() => setEl(id, { position: pos.id })}
                    />
                  ))}
                </div>
                <select value={el.font} onChange={(e) => setEl(id, { font: e.target.value })} aria-label={`${label}のフォント`}>
                  {FONTS.map((f) => (
                    <option key={f.id} value={f.id} style={{ fontFamily: f.css }}>{f.label}</option>
                  ))}
                </select>
                <label className="gclock-row">
                  <span>サイズ</span>
                  <input
                    type="range" min="1" max={id === 'time' ? 30 : 15} step="0.5"
                    value={el.size}
                    onChange={(e) => setEl(id, { size: Number(e.target.value) })}
                  />
                </label>
              </>
            )}
          </section>
        );
      })}

      <section>
        <h3>表示</h3>
        <label className="gclock-row">
          <span>文字色</span>
          <input type="color" value={settings.color} onChange={(e) => set({ color: e.target.value })} />
        </label>
        <label className="gclock-row">
          <input type="checkbox" checked={settings.showSeconds} onChange={(e) => set({ showSeconds: e.target.checked })} />
          <span>秒を表示</span>
        </label>
        <label className="gclock-row">
          <input type="checkbox" checked={settings.hour12} onChange={(e) => set({ hour12: e.target.checked })} />
          <span>12時間表示</span>
        </label>
        <label className="gclock-row">
          <span>温度</span>
          <select value={settings.tempUnit} onChange={(e) => set({ tempUnit: e.target.value })}>
            <option value="C">℃</option>
            <option value="F">℉</option>
          </select>
        </label>
        <label className="gclock-row">
          <span>地域</span>
          <select value={settings.location} onChange={(e) => set({ location: e.target.value })}>
            <option value="auto">現在地（位置情報の許可が必要）</option>
            <option value="tokyo">東京（固定）</option>
          </select>
        </label>
      </section>

      <section className="gclock-actions">
        <button type="button" onClick={toggleFullscreen}>フルスクリーン</button>
        <button type="button" onClick={() => onChange(DEFAULT_SETTINGS)}>初期設定に戻す</button>
        <Link to="/Project/GenerativeClock">概要ページへ戻る</Link>
      </section>
    </aside>
  );
};

export default SettingsPanel;
