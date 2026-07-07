// DreamFootballGame.js
import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const DreamFootballGame = () => {
  useEffect(() => {
    // body 要素のスタイルを直接変更する
    document.body.style.backgroundColor = '#111111';
    document.body.style.display = 'flex';
    document.body.style.justifyContent = 'center';
    document.body.style.alignItems = 'center';
    document.body.style.minHeight = '100vh';
    document.body.style.margin = '0';

    // コンポーネントがアンマウントされたときに元のスタイルに戻す (重要)
    return () => {
      document.body.style.backgroundColor = ''; // 元のスタイルに戻す
      document.body.style.display = '';
      document.body.style.justifyContent = '';
      document.body.style.alignItems = '';
      document.body.style.minHeight = '';
      document.body.style.margin = '';
    };
  }, []);

  return (
    <div className="container text-center">
      <iframe
        src="/DreamFootball/index.html"
        title="Dream Football"
        width="960"
        height="600"
        frameBorder="0"
        scrolling="no"
        style={{ border: 'none' }}
      ></iframe>
    </div>
  );
};

export default DreamFootballGame;