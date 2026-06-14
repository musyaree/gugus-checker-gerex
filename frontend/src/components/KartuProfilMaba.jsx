import React from "react";
import { Avatar } from "../design-system/components/display/Avatar";
import "./KartuProfilMaba.css";

function KartuProfilMaba({
  nama = "Faeyzar Ahnaf",
  nrp = "5025231000",
  gugus = "Garuda",
  region = "Region Timur",
  foto = null,
  loading = false,
}) {
  return (
    <div className="kartu-wrapper">
      {/* Corner ornaments */}
      <div className="kartu-corner kartu-corner--tl" aria-hidden="true">
        <div className="corner-orb" />
      </div>
      <div className="kartu-corner kartu-corner--tr" aria-hidden="true">
        <div className="corner-orb" />
      </div>
      <div className="kartu-corner kartu-corner--bl" aria-hidden="true">
        <div className="corner-orb" />
      </div>
      <div className="kartu-corner kartu-corner--br" aria-hidden="true">
        <div className="corner-orb" />
      </div>

      {/* Floating side ornaments */}
      <div className="side-ornament side-left" aria-hidden="true">
        <div className="ornament-glow" />
      </div>
      <div className="side-ornament side-right" aria-hidden="true">
        <div className="ornament-glow" />
      </div>

      <article className={`kartu-profil ${loading ? "loading-kartu" : ""}`}>
        {/* Portal glow radiating from top */}
        <div className="kartu-top-glow" aria-hidden="true" />

        {/* Left section: Avatar */}
        <div className="kartu-left">
          <div className="kartu-avatar-section">
            <div className="kartu-avatar-halo" aria-hidden="true" />
            {loading ? (
              <>
                <div className="skeleton-avatar-halo" aria-hidden="true" />
                <div className="skeleton-avatar" aria-hidden="true" />
              </>
            ) : (
              <Avatar src={foto} alt={`Foto ${nama}`} size="10rem" ringed />
            )}
          </div>
        </div>

        {/* Right section: Info */}
        <div className="kartu-right">
          {/* Name */}
          <div className="kartu-nama-section">
            <h2 className={`kartu-nama ${loading ? "loading-text" : ""}`}>
              {loading ? "            " : nama}
            </h2>
          </div>

          {/* Ornamental divider */}
          <div className="kartu-ornament" aria-hidden="true">
            <span className="orn-line" />
            <span className="orn-diamond">◆</span>
            <span className="orn-line" />
          </div>

          {/* Info rows */}
          <div className="kartu-info">
            <div className="info-row">
              <span className="info-label">NRP</span>
              <span className={`info-value mono ${loading ? "loading-text" : ""}`}>
                {loading ? "          " : nrp}
              </span>
            </div>
            <div className="info-row">
              <span className="info-label">Region</span>
              <span className={`info-value ${loading ? "loading-text" : ""}`}>
                {loading ? "        " : region}
              </span>
            </div>
          </div>

          {/* Gugus plate */}
          <div className="kartu-gugus-plate">
            <span className={`gugus-text ${loading ? "loading-text" : ""}`}>
              {loading ? "        " : gugus}
            </span>
          </div>
        </div>

        {/* Shimmer sweep — LAST so it sits above everything */}
        <div className="kartu-shimmer" aria-hidden="true" />
      </article>

      {/* Bottom ornamental bar */}
      <div className="kartu-bottom-bar" aria-hidden="true">
        <div className="bar-glow" />
      </div>
    </div>
  );
}

export default KartuProfilMaba;
