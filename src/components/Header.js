import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  // ホームでは背景の白黒に対して文字を反転（difference）させる
  const isHome = useLocation().pathname === "/";

  return (
    <header className={`header${isHome ? " header--home" : ""}`}>
      <div className="header-area">
        <Link to="/" className="title" aria-label="Black Pomeranian（ブラックポメラニアン）ホームへ戻る">
          {/* 装飾文字（Mathematical Fraktur）はスクリーンリーダー・検索エンジンが読めないため aria-hidden とし、名前は Link の aria-label で提供する */}
          <h3 className="header-title" aria-hidden="true"><span style={{ whiteSpace: 'nowrap' }}>𝔅𝔩𝔞𝔠𝔨 𝔓𝔬𝔪𝔢𝔯𝔞𝔫𝔦𝔞𝔫</span></h3>
        </Link>
        <div className="separator-line" aria-hidden="true"></div>
        <button
          className="nav-toggle"
          onClick={() => setIsNavExpanded(!isNavExpanded)}
          aria-label="メニューを開閉"
          aria-expanded={isNavExpanded}
          aria-controls="global-nav"
        >
          {isNavExpanded ? (
            <span className="menu-icon close"></span> 
          ) : (
            <>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </>
          )}
      </button>
      <nav id="global-nav" className={`nav ${isNavExpanded ? "expanded" : ""}`} aria-label="サイト内ナビゲーション">
        <ul>
          <li>
            <NavLink to="/about" className="header-link" onClick={() => setIsNavExpanded(false)}>About</NavLink>
          </li>
          <li>
            <NavLink to="/project" className="header-link" onClick={() => setIsNavExpanded(false)}>Project</NavLink> 
          </li>
          <li>
            <NavLink to="/performance" className="header-link" onClick={() => setIsNavExpanded(false)}>Performance</NavLink>
          </li>
        </ul>
      </nav>
      </div>

    </header>
  );
};

export default Header;
