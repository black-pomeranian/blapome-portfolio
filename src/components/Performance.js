import React from 'react';

const data = [
    {
    year: "2026",
    achievements: [
      "[DJ/VJ] 01.17 moooood",
    ],
  },
  {
    year: "2025",
    achievements: [
      "[VJ] 12.31 CountDown Fusion",
      "[VJ] 12.27 Kommmune 1st Album Release Party",
      "[VJ] 12.13 r108 × A.O.R.B",
      "[DJ] 12.05 sub (c)luv",
      "[VJ] 10.25 DEVOTION",
      "[DJ] 10.18 虎ノ門広告祭 若手だけで！ナイト",
      "[DJ] 10.17 OISHII SUIGYOZA CLUB",
      "[VJ] 09.27 GOODNEWS",
      "[VJ] 08.30 Five Feet Theater",
      "[VJ] 08.29 VOULT",
      "[DJ] 08.29Preparation",
      "[VJ] 08.24 PLAYGROUND vol.10",
      "[VJ] 08.23 r180 vol.3",
      "[VJ] 07.27 TYU8周年祭｢ラブピー無限大♾️",
      "[VJ] 07.10 Marlene",
      "[VJ] 06.27 Blue",
      "[VJ] 05.24 PLAYGROUND vol.9",
      "[VJ] 05.16 金曜日のテクノ",
      "[VJ] 04.05 r108 vol.1",
      "[VJ] 02.28 PULSE 2",
      "[VJ] 02.22 DEVOTION",
    ],
  },
  {
    year: "2024",
    achievements: [
      "[DJ/VJ] 11.16 upfn OLYMPICO Reception Party",
      "[VJ] 11.09 THEATER BOUNCE presented by イヨシコーラ",
      "[DJ/VJ] 10.27 EN vol.2 encircle",
      "[VJ] 10.06 PLAYGROUND vol.7",
      "[VJ] 08.23 BENE×UMBRO POP UP STORE Mikawaya - Hamamatsu",
      "[DJ] 07.27 EN vol.1 \"en\"counter",
      "[VJ] 05.22 UMBRO 100th Anniversary BENE×UMBRO POPUP STORE RECEPTION PARTY",
      "[VJ] 03.31 PLAYGROUND vol.6",
      "[VJ] 02.16 さざれ場#5"
      
    ],
  },
  {
    year: "2023",
    achievements: [
      "[DJ] 08.26 Jack in the box",
      "[VJ] 07.15 MID NIGHT ECHORS",
      "[DJ] 06.17 RIP CURRENT",
    ],
  },
];


const Performance = () => {
  return (
    <div className="container h-screen flex justify-center pt-20">
      <div className="flex flex-col space-y-8 p-4 text-light">
        {data.map((item, index) => (
          <div
            key={index}
                className="rounded-md p-6 mb-4 flex flex-col space-y-4"
          >
            {/* 年の表示（黒文字） */}
            <div className="font-bold text-xl lg:text-xl mb-1">{item.year}</div>
            {/* 実績リスト（黒文字） */}
            <div className="space-y-2">
              {item.achievements.map((achievement, i) => (
                <div key={i} className="">{achievement}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Performance;
