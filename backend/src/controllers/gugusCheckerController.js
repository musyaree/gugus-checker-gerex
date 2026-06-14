import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const cekGugus = async (req, res, next) => {
  try {
    const { nrp } = req.params;

    // Validate input
    if (!nrp || nrp.trim() === "") {
      return res.status(400).json({
        success: false,
        message: "NRP is required",
      });
    }

    // Validate NRP format (exactly 10 digits)
    if (!/^\d{10}$/.test(nrp.trim())) {
      return res.status(400).json({
        success: false,
        message: "Invalid NRP format. NRP must be exactly 10 digits.",
      });
    }

    // Query student with gugus and region data
    const mahasiswa = await prisma.mahasiswa.findUnique({
      where: { nrp: nrp.trim() },
      select: {
        nrp: true,
        nama: true,
        fotoUrl: true,
        gugus: {
          select: {
            nama: true,
            region: {
              select: {
                nama: true,
              },
            },
          },
        },
      },
    });

    // Check if student found
    if (!mahasiswa) {
      return res.status(404).json({
        success: false,
        message: "NRP not found. Please check and try again.",
      });
    }

    // Return success response
    res.status(200).json({
      success: true,
      data: {
        nrp: mahasiswa.nrp,
        nama: mahasiswa.nama,
        foto: mahasiswa.fotoUrl,
        gugus: mahasiswa.gugus.nama,
        region: mahasiswa.gugus.region.nama,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const daftarMahasiswa = async (req, res, next) => {
  try {
    const { nrp, nama, gugusId } = req.body;

    // Validate required fields
    if (!nrp || !nama || !gugusId) {
      return res.status(400).json({
        success: false,
        message: "Fields nrp, nama, and gugusId are required",
      });
    }

    // Check if NRP already registered
    const existing = await prisma.mahasiswa.findUnique({
      where: { nrp },
    });

    if (existing) {
      return res.status(409).json({
        success: false,
        message: "NRP already registered",
      });
    }

    // Create record
    const mahasiswa = await prisma.mahasiswa.create({
      data: {
        nrp,
        nama,
        gugusId,
      },
      include: {
        gugus: {
          include: {
            region: true,
          },
        },
      },
    });

    res.status(201).json({
      success: true,
      message: "Student registered successfully",
      data: mahasiswa,
    });
  } catch (error) {
    next(error);
  }
};
