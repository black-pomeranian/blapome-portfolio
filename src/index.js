import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

// react-snap でプリレンダリングされた静的HTMLは、検索エンジン・AIクローラー・初期表示用。
// React 18 と react-snap の組み合わせでは hydrate に非互換があるため（隣接テキストノードが
// スナップショット時に結合され不一致になる）、常に render で同一内容を再構築する。
const rootElement = document.getElementById('root');
createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
