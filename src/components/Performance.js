import React from 'react';

const data = [
  {
    year: "2025",
    achievements: [
      "[VJ] GOODNEWS",
      "[VJ] Five Feet Theater",
      "[VJ] VOULT",
      "[DJ] Preparation",
      "[VJ] PLAYGROUND vol.10",
      "[VJ] r180",
      "[VJ] TYU8周年祭｢ラブピー無限大♾️",
      "[VJ] Marlene",
      "[VJ] Blue",
      "[VJ] PLAYGROUND vol.9",
      "[VJ] 金曜日のテクノ",
      "[VJ] r108",
      "[VJ] PULSE 2",
      "[VJ] DEVOTION",
    ],
  },
  {
    year: "2024",
    achievements: [
      "[DJ/VJ] upfn OLYMPICO Reception Party",
      "[VJ] THEATER BOUNCE presented by イヨシコーラ",
      "[VJ] PLAYGROUND vol.7",
      "[DJ/VJ] EN vol.2 encircle",
      "[VJ] BENE×UMBRO POP UP STORE Mikawaya - Hamamatsu",
      "[DJ] EN vol.1 \"en\"counter",
      "[VJ] UMBRO 100th Anniversary BENE×UMBRO POPUP STORE RECEPTION PARTY",
      "[VJ] PLAYGROUND vol.6",
      "[VJ] さざれ場#5"
      
    ],
  },
  {
    year: "2023",
    achievements: [
      "[DJ] Jack in the box",
      "[VJ] MID NIGHT ECHORS",
      "[DJ] RIP CURRENT",
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
                className="bg-[#adff2f] rounded-md p-6 mb-4 flex flex-col space-y-4"
          >
            {/* 年の表示（黒文字） */}
            <div className="bg-[#adff2f] font-bold text-xl lg:text-2xl text-black mb-2">{item.year}</div>
            {/* 実績リスト（黒文字） */}
            <div className="bg-[#adff2f] space-y-2 text-black">
              {item.achievements.map((achievement, i) => (
                <div key={i} className="bg-[#adff2f] text-black">{achievement}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Performance;
