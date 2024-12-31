import React from 'react';

const data = [
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
    <div className="container h-screen flex justify-center items-center">
      <div className="flex flex-col space-y-8 p-4 text-light">
        {data.map((item, index) => (
          <div key={index} className="flex space-x-8">
            {/* 年の表示 */}
            <div className="w-20 font-bold text-xl lg:text-2xl text-light">{item.year}</div>
            {/* 実績リスト */}
            <div className="flex-1 space-y-2 text-light">
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
