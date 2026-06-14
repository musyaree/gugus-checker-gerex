import express from "express";
import {
  cekGugus,
  daftarMahasiswa,
} from "../controllers/gugusCheckerController.js";

const router = express.Router();

// GET /api/v1/gugus-checker/:nrp
// Cek gugus & region berdasarkan NRP
router.get("/:nrp", cekGugus);

// POST /api/v1/mahasiswa
// Daftarkan mahasiswa baru (admin only, optional)
router.post("/", daftarMahasiswa);

export default router;
