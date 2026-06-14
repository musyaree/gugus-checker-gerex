import React, { useState } from "react";
import { gugusCheckerAPI } from "../services/api";
import { Button } from "../design-system/components/forms/Button";
import { Input } from "../design-system/components/forms/Input";
import "./GugusCheckerForm.css";

function GugusCheckerForm({ onResult }) {
  const [nrp, setNrp] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleNrpChange = (e) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 10);
    setNrp(value);
  };

  const isNrpValid = nrp.trim().length === 10 && /^\d{10}$/.test(nrp);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (!nrp.trim()) {
      setError("Masukkan NRP terlebih dahulu");
      return;
    }

    if (!isNrpValid) {
      setError("NRP harus tepat 10 angka");
      return;
    }

    setLoading(true);

    const response = await gugusCheckerAPI.cek(nrp);

    if (response.success) {
      onResult(response.data);
    } else {
      setError(response.message);
    }

    setLoading(false);
  };

  return (
    <div className="gugus-checker-form">
      <form onSubmit={handleSubmit} className="dk-search">
        <div style={{ flex: 1, minWidth: 0 }}>
          <Input
            id="nrp"
            label="Masukkan NRP (10 angka)"
            type="text"
            placeholder="cth. 5025231001"
            value={nrp}
            onChange={handleNrpChange}
            disabled={loading}
            fullWidth
            inputMode="numeric"
            maxLength="10"
          />
        </div>

        <Button
          type="submit"
          variant="primary"
          size="lg"
          disabled={loading || !isNrpValid}
          className="dk-search-btn"
        >
          {loading ? "Mencari..." : "Cek Gugus"}
        </Button>
      </form>

      {error && (
        <div className="message-box error-box">
          <p className="message-text">{error}</p>
        </div>
      )}

      {loading && (
        <div className="message-box loading-box">
          <p className="message-text">Sedang mencari data Anda...</p>
        </div>
      )}
    </div>
  );
}

export default GugusCheckerForm;
