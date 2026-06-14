-- CreateTable
CREATE TABLE "regions" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nama" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "gugus" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nama" TEXT NOT NULL,
    "regionId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "gugus_regionId_fkey" FOREIGN KEY ("regionId") REFERENCES "regions" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "mahasiswa" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nrp" TEXT NOT NULL,
    "nama" TEXT NOT NULL,
    "fotoUrl" TEXT,
    "gugusId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "mahasiswa_gugusId_fkey" FOREIGN KEY ("gugusId") REFERENCES "gugus" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "regions_nama_key" ON "regions"("nama");

-- CreateIndex
CREATE UNIQUE INDEX "gugus_nama_key" ON "gugus"("nama");

-- CreateIndex
CREATE UNIQUE INDEX "mahasiswa_nrp_key" ON "mahasiswa"("nrp");

-- CreateIndex
CREATE INDEX "mahasiswa_nrp_idx" ON "mahasiswa"("nrp");
