const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3001/api/v1";

export const gugusCheckerAPI = {
  /**
   * Cek gugus mahasiswa berdasarkan NRP
   * @param {string} nrp - Nomor Registrasi Pokok
   * @returns {Promise<{success: boolean, data?: {nrp, nama, gugus, region}, message?: string}>}
   */
  cek: async (nrp) => {
    try {
      const response = await fetch(`${API_BASE_URL}/gugus-checker/${nrp}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Gagal mengambil data");
      }

      return data;
    } catch (error) {
      return {
        success: false,
        message: error.message || "Terjadi kesalahan koneksi ke server. Pastikan backend berjalan di http://localhost:3001",
      };
    }
  },
};
