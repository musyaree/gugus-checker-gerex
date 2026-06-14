import React, { useState, useEffect } from "react";
import GugusCheckerForm from "./components/GugusCheckerForm";
import KartuProfilMaba from "./components/KartuProfilMaba";
import RevealCard from "./components/RevealCard";
import ScrollBanner from "./components/ScrollBanner";
import PillLabel from "./components/PillLabel";
import { Button } from "./design-system/components/forms/Button";
import "./App.css";

function App() {
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const assetUrls = [
      "/assets/platform.svg",
      "/assets/patung.svg",
      "/assets/tiang.svg"
    ];

    assetUrls.forEach(url => {
      const img = new Image();
      img.src = url;
    });
  }, []);

  function handleResult(data) {
    setIsLoading(true);
    // Simulate loading for 1.2 seconds before showing result
    setTimeout(() => {
      setResult(data);
      setIsLoading(false);
    }, 1200);
  }

  function handleReset() {
    setResult(null);
    setIsLoading(false);
  }


  return (
    <div className="app dk-stage">
      {!result && !isLoading ? (
        <header className="app-header">
          <div className="header-content">
            <div className="hero-top">
              <PillLabel size="md">Mulai Langkahmu</PillLabel>
            </div>

            <ScrollBanner>TEMUKAN GUGUSMU</ScrollBanner>

            <p className="app-subtitle">
              Selamat datang Sobat Karsa. Masukkan NRP-mu dan temukan gugus tempatmu bertumbuh sepanjang GERIGI.
            </p>

            <GugusCheckerForm onResult={handleResult} />
          </div>
        </header>
      ) : result || isLoading ? (
        <main className="app-result">
          <div className="result-reveal">
            <RevealCard
              nama={result?.nama || "Faeyzar Ahnaf"}
              nrp={result?.nrp || "5025231000"}
              gugus={result?.gugus || "Garuda"}
              region={result?.region || "Region Timur"}
              foto={result?.foto || null}
              loading={isLoading}
            />
            {!isLoading && (
              <Button variant="ghost" size="md" onClick={handleReset}>
                Cari Lagi
              </Button>
            )}
          </div>
        </main>
      ) : null}

      <footer className="app-footer">
        <PillLabel size="sm">Gerigi x UKM Expo ITS 2026</PillLabel>
      </footer>
    </div>
  );
}

export default App;
