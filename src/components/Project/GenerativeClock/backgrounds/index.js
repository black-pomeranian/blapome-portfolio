// 背景の登録先。
// 新しい背景を追加するときは、このフォルダに
//   { id, name, sketch: (getData) => (p) => { p.setup = ...; p.draw = ...; } }
// を default export するファイルを作り、下の配列に足すだけで設定画面に並びます。
// getData() は { now: Date, weather: { status, temperature, code, type, isDay } } を返すので、
// 時刻や天気に反応する背景も作れます。
// 連動：getData().interact が true のとき、pulse.js の createPulse で秒・分の切り替わりに反応し、
//       getData().setOutput({ glow: 0〜1, offsetY: px }) で時計の文字側へ値を返せます。
// fps は Background.js 側で設定値に合わせて制限するので、スケッチ内で frameRate は呼ばないでください。
// 方針：アンビエントで、計算が軽く、ゆっくり動くもの（15〜20fps でも成立する・描画要素は少なめ）。
import drift from './drift';
import tide from './tide';
import plain from './plain';

export const BACKGROUNDS = [drift, tide, plain];

export const findBackground = (id) => BACKGROUNDS.find((b) => b.id === id) || BACKGROUNDS[0];
