// 背景の登録先。
// 新しい背景を追加するときは、このフォルダに
//   { id, name, sketch: (getData) => (p) => { p.setup = ...; p.draw = ...; } }
// を default export するファイルを作り、下の配列に足すだけで設定画面に並びます。
// getData() は { now: Date, weather: { status, temperature, code, type, isDay } } を返すので、
// 時刻や天気に反応する背景も作れます。
import flow from './flow';
import lines from './lines';
import plain from './plain';

export const BACKGROUNDS = [flow, lines, plain];

export const findBackground = (id) => BACKGROUNDS.find((b) => b.id === id) || BACKGROUNDS[0];
