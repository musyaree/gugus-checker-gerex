import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding database...");

  await prisma.mahasiswa.deleteMany();
  await prisma.gugus.deleteMany();
  await prisma.region.deleteMany();

  // Regions
  const regionTimur = await prisma.region.create({
    data: { nama: "Region Timur" },
  });

  const regionBarat = await prisma.region.create({
    data: { nama: "Region Barat" },
  });

  const regionTengah = await prisma.region.create({
    data: { nama: "Region Tengah" },
  });

  // Gugus
  const garuda = await prisma.gugus.create({
    data: { nama: "Garuda", regionId: regionTimur.id },
  });

  const rajawali = await prisma.gugus.create({
    data: { nama: "Rajawali", regionId: regionTimur.id },
  });

  const elang = await prisma.gugus.create({
    data: { nama: "Elang", regionId: regionBarat.id },
  });

  const phoenix = await prisma.gugus.create({
    data: { nama: "Phoenix", regionId: regionBarat.id },
  });

  const merpati = await prisma.gugus.create({
    data: { nama: "Merpati", regionId: regionTengah.id },
  });

  const halcyon = await prisma.gugus.create({
    data: { nama: "Halcyon", regionId: regionTengah.id },
  });

  const maba = [
    {
      nrp: "5025231001",
      nama: "Faeyzar Ahnaf",
      gugusId: garuda.id,
    },
    {
      nrp: "5025231002",
      nama: "Siti Aisyah",
      gugusId: rajawali.id,
    },
    {
      nrp: "5025231003",
      nama: "Ahmad Rizaldi",
      gugusId: elang.id,
    },
    {
      nrp: "5025231004",
      nama: "Dini Nurhaliza",
      gugusId: phoenix.id,
    },
    {
      nrp: "5025231005",
      nama: "Eka Prasetyanto",
      gugusId: merpati.id,
    },
    {
      nrp: "5025231006",
      nama: "Farah Nabila",
      gugusId: halcyon.id,
    },
  ];

  for (const m of maba) {
    await prisma.mahasiswa.create({
      data: {
        nrp: m.nrp,
        nama: m.nama,
        gugusId: m.gugusId,
        fotoUrl: `https://placehold.co/200x200?text=${m.nama.replace(" ", "+")}`,
      },
    });
  }

  console.log("Seeding completed!");
}

main()
  .catch((e) => {
    console.error("Seeding error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
