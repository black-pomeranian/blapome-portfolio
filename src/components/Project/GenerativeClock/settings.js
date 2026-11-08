// デジタル時計ページの設定（localStorage に保存）

export const STORAGE_KEY = 'generative-clock-settings-v2';

// 3x3 の配置アンカー
export const POSITIONS = [
  { id: 'top-left', label: '左上' },
  { id: 'top-center', label: '上' },
  { id: 'top-right', label: '右上' },
  { id: 'middle-left', label: '左' },
  { id: 'center', label: '中央' },
  { id: 'middle-right', label: '右' },
  { id: 'bottom-left', label: '左下' },
  { id: 'bottom-center', label: '下' },
  { id: 'bottom-right', label: '右下' },
];

// フォント候補（Google Fonts は GenerativeClock.css で読み込み）
export const FONTS = [
  { id: 'ubuntu', label: 'Ubuntu', css: "'Ubuntu', sans-serif" },
  { id: 'zen', label: 'Zen Kaku Gothic New', css: "'Zen Kaku Gothic New', sans-serif" },
  { id: 'spacemono', label: 'Space Mono', css: "'Space Mono', monospace" },
  { id: 'dotgothic', label: 'DotGothic16', css: "'DotGothic16', sans-serif" },
  { id: 'orbitron', label: 'Orbitron', css: "'Orbitron', sans-serif" },
  { id: 'serif', label: 'Serif', css: "'Times New Roman', serif" },
];

// 表示要素（size は vmin 単位）
export const ELEMENTS = [
  { id: 'time', label: '時計' },
  { id: 'date', label: '日付' },
  { id: 'weather', label: '天気・気温' }, // アイコン＋気温を横並びで表示
];

export const DEFAULT_SETTINGS = {
  background: 'drift',
  color: '#f8f9fa',
  hour12: false,
  showSeconds: true,
  tempUnit: 'C',
  location: 'auto', // auto = 現在地 / tokyo = 東京固定
  interact: true, // 背景と時計の連動
  fps: 20, // 背景の fps（常時表示での電池・発熱対策）
  keepAwake: true, // Screen Wake Lock で画面を消さない
  elements: {
    time: { visible: true, position: 'center', font: 'spacemono', size: 16 },
    date: { visible: false, position: 'center', font: 'ubuntu', size: 3 },
    weather: { visible: true, position: 'center', font: 'ubuntu', size: 5 },
  },
};

export const fontCss = (id) => (FONTS.find((f) => f.id === id) || FONTS[0]).css;

export function loadSettings() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_SETTINGS;
    const saved = JSON.parse(raw);
    // 新しい設定項目が増えても壊れないようにデフォルトとマージ
    const elements = {};
    ELEMENTS.forEach(({ id }) => {
      elements[id] = { ...DEFAULT_SETTINGS.elements[id], ...(saved.elements || {})[id] };
    });
    return { ...DEFAULT_SETTINGS, ...saved, elements };
  } catch (e) {
    return DEFAULT_SETTINGS;
  }
}

export function saveSettings(settings) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
  } catch (e) {
    // プライベートモード等で保存できなくても表示は継続
  }
}
