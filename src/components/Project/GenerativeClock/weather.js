import { useEffect, useState } from 'react';

// 天気・気温は Open-Meteo（https://open-meteo.com/）から取得。
// APIキー不要・CORS対応のため、静的ホスティングのこのサイトからそのまま呼べる。
// 位置情報は「現在地」モードでのみ使用。許可がなければ天気は非表示にする。
const TOKYO = { latitude: 35.6895, longitude: 139.6917 };
const REFRESH_MS = 15 * 60 * 1000;

// WMO weather code → 表記
const CODES = [
  { codes: [0], ja: '快晴', en: 'Clear', type: 'clear' },
  { codes: [1], ja: '晴れ', en: 'Mainly Clear', type: 'partly' },
  { codes: [2], ja: '晴れ時々くもり', en: 'Partly Cloudy', type: 'partly' },
  { codes: [3], ja: 'くもり', en: 'Overcast', type: 'cloudy' },
  { codes: [45, 48], ja: '霧', en: 'Fog', type: 'fog' },
  { codes: [51, 53, 55, 56, 57], ja: '霧雨', en: 'Drizzle', type: 'rain' },
  { codes: [61, 63, 65, 66, 67, 80, 81, 82], ja: '雨', en: 'Rain', type: 'rain' },
  { codes: [71, 73, 75, 77, 85, 86], ja: '雪', en: 'Snow', type: 'snow' },
  { codes: [95, 96, 99], ja: '雷雨', en: 'Thunderstorm', type: 'storm' },
];

export const describeWeather = (code) =>
  CODES.find((c) => c.codes.includes(code)) || { ja: '—', en: '—', type: 'unknown' };

// 位置情報が許可されなかった（または使えない）場合は reject する
const getPosition = () =>
  new Promise((resolve, reject) => {
    if (!navigator.geolocation) return reject(Object.assign(new Error('unsupported'), { denied: true }));
    navigator.geolocation.getCurrentPosition(
      (pos) => resolve({ latitude: pos.coords.latitude, longitude: pos.coords.longitude }),
      (err) => reject(Object.assign(new Error(err.message), { denied: err.code === err.PERMISSION_DENIED })),
      { timeout: 15000, maximumAge: 30 * 60 * 1000 }
    );
  });

// 初回アクセスで位置情報が「許可」に変わったら、ページをリロードして天気を表示し直す
function useReloadOnGeolocationGrant(enabled) {
  useEffect(() => {
    if (!enabled || !navigator.permissions?.query) return undefined;
    let status;
    let disposed = false;
    const onChange = () => {
      if (status.state === 'granted') window.location.reload();
    };
    navigator.permissions
      .query({ name: 'geolocation' })
      .then((s) => {
        if (disposed || s.state === 'granted') return;
        status = s;
        status.addEventListener('change', onChange);
      })
      .catch(() => {});
    return () => {
      disposed = true;
      status?.removeEventListener('change', onChange);
    };
  }, [enabled]);
}

// status: loading / ok / denied（位置情報が許可されない）/ error
export function useWeather(locationMode) {
  const [weather, setWeather] = useState({ status: 'loading' });
  useReloadOnGeolocationGrant(locationMode === 'auto');

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      try {
        const { latitude, longitude } = locationMode === 'auto' ? await getPosition() : TOKYO;
        const url =
          'https://api.open-meteo.com/v1/forecast' +
          `?latitude=${latitude.toFixed(3)}&longitude=${longitude.toFixed(3)}` +
          '&current=temperature_2m,weather_code,is_day&timezone=auto';
        const res = await fetch(url);
        if (!res.ok) throw new Error(res.status);
        const json = await res.json();
        if (cancelled) return;
        const code = json.current.weather_code;
        setWeather({
          status: 'ok',
          temperature: json.current.temperature_2m,
          code,
          isDay: json.current.is_day === 1,
          ...describeWeather(code),
        });
      } catch (e) {
        if (cancelled) return;
        if (e.denied) setWeather({ status: 'denied' });
        else setWeather((w) => (w.status === 'ok' ? w : { status: 'error' }));
      }
    };

    load();
    const id = setInterval(load, REFRESH_MS);
    return () => {
      cancelled = true;
      clearInterval(id);
    };
  }, [locationMode]);

  return weather;
}
