import React from "react";
import "./ScrollBanner.css";

function ScrollBanner({ children }) {
  return (
    <div className="scroll-banner-wrap">
      <style>{`
        .scroll-end {
          width: 32px;
          height: 80px;
          background: linear-gradient(180deg, #E8C060 0%, #D4A030 40%, #B88020 70%, #D4A030 100%);
          border: 2.5px solid #A07820;
          box-shadow: inset 0 2px 4px rgba(255,255,255,0.25), 0 5px 14px rgba(0,0,0,0.45);
          flex-shrink: 0;
        }
        .scroll-end--l {
          border-radius: 8px 0 0 8px;
          border-right: none;
        }
        .scroll-end--r {
          border-radius: 0 8px 8px 0;
          border-left: none;
        }
        .scroll-body {
          background: linear-gradient(180deg, #FBF3E2 0%, #F0E2C0 45%, #FBF3E2 100%);
          border-top: 3px solid #C49828;
          border-bottom: 3px solid #C49828;
          padding: 20px 44px;
          text-align: center;
          box-shadow: inset 0 2px 8px rgba(0,0,0,0.08), 0 5px 20px rgba(0,0,0,0.5);
          min-width: 220px;
        }
        .scroll-title {
          font-family: "Lilita One", "Fredoka One", "Arial Black", sans-serif;
          font-size: clamp(2.8rem, 11vw, 5.2rem);
          color: #7060C8;
          -webkit-text-stroke: 5px #FFFFFF;
          paint-order: stroke fill;
          line-height: 1.0;
          letter-spacing: 0.02em;
          text-transform: uppercase;
          filter: drop-shadow(0 5px 0 rgba(50, 30, 100, 0.32));
          display: block;
          white-space: pre-line;
          margin: 0;
        }
      `}</style>
      <div className="scroll-end scroll-end--l" />
      <div className="scroll-body">
        <span className="scroll-title">{children}</span>
      </div>
      <div className="scroll-end scroll-end--r" />
    </div>
  );
}

export default ScrollBanner;
