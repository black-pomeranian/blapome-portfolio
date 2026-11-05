import React from 'react';

// 天気アイコン（線画・currentColor で文字色に追従）
const Sun = () => (
  <g>
    <circle cx="12" cy="12" r="4.2" />
    {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
      <line key={a} x1="12" y1="2.2" x2="12" y2="4.6" transform={`rotate(${a} 12 12)`} />
    ))}
  </g>
);
const Moon = () => <path d="M19.5 14.5A8 8 0 0 1 9.5 4.5a8 8 0 1 0 10 10z" />;
const Cloud = ({ y = 0 }) => (
  <path transform={`translate(0 ${y})`} d="M7 18.5h10.2a4 4 0 0 0 .4-7.98A5.6 5.6 0 0 0 6.9 11.2 3.65 3.65 0 0 0 7 18.5z" />
);
const SmallSun = () => (
  <g transform="translate(-3.2 -3.2) scale(0.62)">
    <Sun />
  </g>
);
const SmallMoon = () => (
  <g transform="translate(-2.5 -2.8) scale(0.6)">
    <Moon />
  </g>
);

const ICONS = {
  clear: (isDay) => (isDay ? <Sun /> : <Moon />),
  partly: (isDay) => (
    <>
      {isDay ? <SmallSun /> : <SmallMoon />}
      <Cloud y={2} />
    </>
  ),
  cloudy: () => <Cloud />,
  fog: () => (
    <>
      <Cloud y={-3} />
      <line x1="5" y1="19" x2="19" y2="19" />
      <line x1="7" y1="22" x2="17" y2="22" />
    </>
  ),
  rain: () => (
    <>
      <Cloud y={-3} />
      <line x1="8.5" y1="18.5" x2="7.5" y2="21.5" />
      <line x1="12.5" y1="18.5" x2="11.5" y2="21.5" />
      <line x1="16.5" y1="18.5" x2="15.5" y2="21.5" />
    </>
  ),
  snow: () => (
    <>
      <Cloud y={-3} />
      {[8, 12, 16].map((x) => (
        <circle key={x} cx={x} cy="20" r="0.6" fill="currentColor" />
      ))}
    </>
  ),
  storm: () => (
    <>
      <Cloud y={-3} />
      <path d="M12.8 15.5l-2.3 3.5h3l-2.3 3.5" />
    </>
  ),
  unknown: () => <line x1="7" y1="12" x2="17" y2="12" />,
};

const WeatherIcon = ({ type, isDay = true, label }) => (
  <svg
    className="gclock-weather-icon"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.4"
    strokeLinecap="round"
    strokeLinejoin="round"
    role="img"
    aria-label={label}
  >
    <title>{label}</title>
    {(ICONS[type] || ICONS.unknown)(isDay)}
  </svg>
);

export default WeatherIcon;
