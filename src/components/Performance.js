import React from 'react';

const data = [
    {
    year: "2026",
    achievements: [
      { role: "DJ", date: "03.28", title: "TBA", location: "" },
      { role: "DJ", date: "03.28", title: "TBA", location: "" },
      { role: "VJ", date: "03.27", title: "底", location: "大塚地底" },
      { role: "DL/VJ", date: "03.20", title: "moooood", location: "渋谷roots" },
      { role: "VJ", date: "03.13", title: "r108", location: "不眠遊戯ライオン" },
      { role: "VJ", date: "03.07", title: "Playground vol.11", location: "青山蜂" },
      { role: "DJ", date: "02.27", title: "金曜日のテクノ", location: "神保町肆-YON-" },
      { role: "DJ", date: "02.21", title: "オイシイ水餃子クラブ1周年パーティー", location: "オイシイ水餃子クラブ" },
      { role: "VJ", date: "02.06", title: "defo", location: "Saloon" },
      { role: "VJ", date: "01.31", title: "Thir(s)ty One", location: "Park in Oark" },
      { role: "DJ/VJ", date: "01.17", title: "moooood", location: "渋谷roots" },
    ],
  },
  {
    year: "2025",
    achievements: [
      { role: "VJ", date: "12.31", title: "CountDown Fusion", location: "Saloon" },
      { role: "VJ", date: "12.27", title: "Kommmune 1st Album Release Party", location: "SPREAD" },
      { role: "VJ", date: "12.13", title: "r108 × A.O.R.B", location: "HVEN" },
      { role: "DJ", date: "12.05", title: "sub (c)luv", location: "ハラカド" },
      { role: "VJ", date: "10.25", title: "DEVOTION", location: "青山蜂" },
      { role: "DJ", date: "10.18", title: "虎ノ門広告祭 若手だけで！ナイト", location: "TOKYO NODE" },
      { role: "DJ", date: "10.17", title: "OISHII SUIGYOZA CLUB", location: "オイシイ水餃子クラブ" },
      { role: "VJ", date: "09.27", title: "GOODNEWS", location: "COA" },
      { role: "VJ", date: "08.30", title: "Five Feet Theater", location: "TheaterGuild" },
      { role: "VJ", date: "08.29", title: "VOULT", location: "BRAND SHIBUYA" },
      { role: "DJ", date: "08.29", title: "Preparation", location: "ハラカド" },
      { role: "VJ", date: "08.24", title: "PLAYGROUND vol.10", location: "青山蜂" },
      { role: "VJ", date: "08.23", title: "r180 vol.3", location: "HVEN" },
      { role: "VJ", date: "07.27", title: "TYU8周年祭｢ラブピー無限大♾️", location: "磐田駅前" },
      { role: "VJ", date: "07.10", title: "Marlene", location: "Saloon" },
      { role: "VJ", date: "06.27", title: "Blue", location: "TheaterGuild" },
      { role: "VJ", date: "05.24", title: "PLAYGROUND vol.9", location: "青山蜂" },
      { role: "VJ", date: "05.16", title: "金曜日のテクノ", location: "Bar bonobo" },
      { role: "VJ", date: "04.05", title: "r108 vol.1", location: "青山蜂" },
      { role: "VJ", date: "02.28", title: "PULSE 2", location: "下北沢SPREAD" },
      { role: "VJ", date: "02.22", title: "DEVOTION", location: "青山蜂" },
    ],
  },
  {
    year: "2024",
    achievements: [
      { role: "DJ/VJ", date: "11.16", title: "upfn OLYMPICO Reception Party", location: "Good Gallery" },
      { role: "VJ", date: "11.09", title: "THEATER BOUNCE presented by イヨシコーラ", location: "TheaterGuild" },
      { role: "DJ/VJ", date: "10.27", title: "EN vol.2 encircle", location: "Knock Koenji" },
      { role: "VJ", date: "10.06", title: "PLAYGROUND vol.7", location: "青山蜂" },
      { role: "VJ", date: "08.23", title: "BENE×UMBRO POP UP STORE Mikawaya - Hamamatsu", location: "みかわや" },
      { role: "DJ", date: "07.27", title: "EN vol.1 \"en\"counter", location: "東新宿 LOVE TKO" },
      { role: "VJ", date: "05.22", title: "UMBRO 100th Anniversary BENE×UMBRO POPUP STORE RECEPTION PARTY", location: "SOCIAL TOKYO" },
      { role: "VJ", date: "03.31", title: "PLAYGROUND vol.6", location: "青山蜂" },
      { role: "VJ", date: "02.16", title: "さざれ場#5", location: "下北沢LIVE HAUS" }
    ],
  },
  {
    year: "2023",
    achievements: [
      { role: "DJ", date: "08.26", title: "Jack in the box", location: "Nagara Neon room" },
      { role: "VJ", date: "07.15", title: "MID NIGHT ECHORS", location: "Planet cafe" },
      { role: "DJ", date: "06.17", title: "RIP CURRENT", location: "北千束Neutra" }
    ],
  },
];


const Performance = () => {
  return (
    <div className="container h-screen flex justify-center pt-20">
      <div className="flex flex-col space-y-8 p-4 text-light">
        {data.map((item, index) => (
          <div key={index} className="rounded-md p-6 mb-4">
            <div className="font-bold text-xl lg:text-xl mb-1">{item.year}</div>
            <div className="space-y-3">
              {item.achievements.map((achievement, i) => {
                // 互換性のため、文字列とオブジェクトの両方を許容
                if (typeof achievement === 'string') {
                  return (
                    <div key={i} className="flex justify-between">
                      <div className="text-base">{achievement}</div>
                      <div className="text-sm text-gray-400" />
                    </div>
                  );
                }

                const { role, date, title, location } = achievement;
                return (
                  <div key={i} className="flex flex-col">
                    <div className="text-base font-medium flex items-center flex-wrap">
                      <span className="mr-2">[{role}]</span>
                      <span className="mr-2">{date}</span>
                      {location && (
                        <span className="text-base font-medium flex items-center">
                          <span>{location}</span>
                        </span>
                      )}
                    </div>
                    <div className="text-lg">{title}</div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Performance;
