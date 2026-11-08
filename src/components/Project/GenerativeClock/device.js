import { useEffect } from 'react';

// 画面を自動で消さない（Screen Wake Lock API）。
// iPadOS 16.4 以降の Safari / Chrome などで有効。非対応の環境では何もしない。
// タブが裏に回るとロックは自動で解除されるので、戻ってきたとき・タップされたときに取り直す。
export function useKeepAwake(enabled) {
  useEffect(() => {
    if (!enabled || !('wakeLock' in navigator)) return undefined;
    let lock = null;
    let requesting = false;
    let disposed = false;

    const request = async () => {
      if (disposed || lock || requesting || document.visibilityState !== 'visible') return;
      requesting = true;
      try {
        lock = await navigator.wakeLock.request('screen');
        lock.addEventListener('release', () => {
          lock = null;
        });
        if (disposed) lock.release();
      } catch (e) {
        // ユーザー操作が必要な環境では、次のタップで再挑戦する
      } finally {
        requesting = false;
      }
    };

    request();
    document.addEventListener('visibilitychange', request);
    window.addEventListener('pointerdown', request);
    return () => {
      disposed = true;
      document.removeEventListener('visibilitychange', request);
      window.removeEventListener('pointerdown', request);
      lock?.release();
    };
  }, [enabled]);
}

// 時計ページを開いている間だけ、「ホーム画面に追加」したときに
// 時計ページがアプリとして全画面で開くよう head を差し替える。ページを離れたら元に戻す。
const HEAD_TAGS = [
  ['link', { rel: 'manifest', href: '/generative-clock.webmanifest' }],
  ['link', { rel: 'apple-touch-icon', href: '/images/GenerativeClock/icon-180.png' }],
  ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
  ['meta', { name: 'mobile-web-app-capable', content: 'yes' }],
  ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' }],
  ['meta', { name: 'apple-mobile-web-app-title', content: 'Clock' }],
  ['meta', { name: 'theme-color', content: '#08080c' }],
];

export function useHomeScreenApp() {
  useEffect(() => {
    // react-snap のプリレンダリング時は差し替えない（静的HTMLにはサイト共通の head を残す）
    if (navigator.userAgent === 'ReactSnap') return undefined;
    const added = [];
    const hidden = [];
    HEAD_TAGS.forEach(([tag, attrs]) => {
      // 既存の同種タグ（サイト全体の manifest など）は一時的に外す
      const key = attrs.rel ? `${tag}[rel="${attrs.rel}"]` : `${tag}[name="${attrs.name}"]`;
      document.head.querySelectorAll(key).forEach((el) => {
        hidden.push(el);
        el.remove();
      });
      const el = document.createElement(tag);
      Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
      document.head.appendChild(el);
      added.push(el);
    });
    return () => {
      added.forEach((el) => el.remove());
      hidden.forEach((el) => document.head.appendChild(el));
    };
  }, []);
}
