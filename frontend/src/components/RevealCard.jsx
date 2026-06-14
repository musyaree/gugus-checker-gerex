import React from "react";
import KartuProfilMaba from "./KartuProfilMaba";
import "./RevealCard.css";

function RevealCard({
  nama = "Faeyzar Ahnaf",
  nrp = "5025231000",
  gugus = "Garuda",
  region = "Region Timur",
  foto = null,
  loading = false,
}) {
  const assetPositions = {
    platform: { x: 5, y: 266, scale: 3 },
    patungLeft: { x: 311, y: 240, scale: 0.98 },
    patungRight: { x: -286, y: 245, scale: 0.96 },
    tiangLeft: { x: -775, y: -52, scale: 2.84 },
    tiangRight: { x: 777, y: -53, scale: 2.82 }
  };

  const renderAsset = (assetId, zIndex, imgSrc, altText, isFlipped = false) => {
    const pos = assetPositions[assetId];

    return (
      <div
        key={assetId}
        className="asset-item"
        style={{
          zIndex,
          transform: `translate(${pos.x}px, ${pos.y}px) scale(${pos.scale}) ${isFlipped ? "scaleX(-1)" : ""}`,
        }}
      >
        <img src={imgSrc} alt={altText} />
      </div>
    );
  };

  return (
    <div className="reveal-with-assets">
      {/* Background Assets - Platform (z-index 1) */}
      {renderAsset("platform", 1, "/assets/platform.svg", "Platform")}

      {/* Middle Layer Assets - Patung (z-index 2) */}
      {renderAsset("patungLeft", 2, "/assets/patung.svg", "Patung Kiri", true)}
      {renderAsset("patungRight", 2, "/assets/patung.svg", "Patung Kanan")}

      {/* Front Layer Assets - Tiang (z-index 4) */}
      {renderAsset("tiangLeft", 4, "/assets/tiang.svg", "Tiang Kiri")}
      {renderAsset("tiangRight", 4, "/assets/tiang.svg", "Tiang Kanan", true)}

      {/* Kartu Profil - On top of assets (z-index 10) */}
      <div className="kartu-container" style={{ zIndex: 10 }}>
        <KartuProfilMaba
          nama={nama}
          nrp={nrp}
          gugus={gugus}
          region={region}
          foto={foto}
          loading={loading}
        />
      </div>
    </div>
  );
}

export default RevealCard;
