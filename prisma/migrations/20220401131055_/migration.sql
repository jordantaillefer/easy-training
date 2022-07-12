-- CreateTable
CREATE TABLE "Programme" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "nomProgramme" TEXT NOT NULL DEFAULT E'',

    CONSTRAINT "Programme_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Semaine" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "programmeId" TEXT NOT NULL,

    CONSTRAINT "Semaine_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Jour" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "semaineId" TEXT NOT NULL,
    "jourDeSemaine" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "Jour_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Seance" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "numSeance" INTEGER NOT NULL DEFAULT 1,
    "jourId" TEXT NOT NULL,

    CONSTRAINT "Seance_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ExerciceSeance" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "tempsRecup" INTEGER NOT NULL DEFAULT 0,
    "ordre" INTEGER NOT NULL DEFAULT 1,
    "nbSerie" INTEGER NOT NULL DEFAULT 0,
    "nbRepetition" INTEGER NOT NULL DEFAULT 0,
    "seanceId" TEXT NOT NULL,
    "exerciceId" TEXT NOT NULL,

    CONSTRAINT "ExerciceSeance_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Exercice" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "nomExercice" TEXT NOT NULL,
    "categorie" TEXT NOT NULL,

    CONSTRAINT "Exercice_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sportif" (
    "id" TEXT NOT NULL,

    CONSTRAINT "Sportif_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SportifSeance" (
    "id" TEXT NOT NULL,
    "sportifId" TEXT NOT NULL,

    CONSTRAINT "SportifSeance_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SportifExerciceSeance" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "tempsRecup" INTEGER NOT NULL DEFAULT 0,
    "ordre" INTEGER NOT NULL DEFAULT 1,
    "nbSerie" INTEGER NOT NULL DEFAULT 0,
    "nbRepetition" INTEGER NOT NULL DEFAULT 0,
    "note" INTEGER NOT NULL DEFAULT 0,
    "seanceId" TEXT NOT NULL,
    "exerciceId" TEXT NOT NULL,
    "sportifSeanceId" TEXT NOT NULL,

    CONSTRAINT "SportifExerciceSeance_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Semaine" ADD CONSTRAINT "Semaine_programmeId_fkey" FOREIGN KEY ("programmeId") REFERENCES "Programme"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Jour" ADD CONSTRAINT "Jour_semaineId_fkey" FOREIGN KEY ("semaineId") REFERENCES "Semaine"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Seance" ADD CONSTRAINT "Seance_jourId_fkey" FOREIGN KEY ("jourId") REFERENCES "Jour"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExerciceSeance" ADD CONSTRAINT "ExerciceSeance_seanceId_fkey" FOREIGN KEY ("seanceId") REFERENCES "Seance"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExerciceSeance" ADD CONSTRAINT "ExerciceSeance_exerciceId_fkey" FOREIGN KEY ("exerciceId") REFERENCES "Exercice"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SportifSeance" ADD CONSTRAINT "SportifSeance_sportifId_fkey" FOREIGN KEY ("sportifId") REFERENCES "Sportif"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SportifExerciceSeance" ADD CONSTRAINT "SportifExerciceSeance_seanceId_fkey" FOREIGN KEY ("seanceId") REFERENCES "Seance"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SportifExerciceSeance" ADD CONSTRAINT "SportifExerciceSeance_exerciceId_fkey" FOREIGN KEY ("exerciceId") REFERENCES "Exercice"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SportifExerciceSeance" ADD CONSTRAINT "SportifExerciceSeance_sportifSeanceId_fkey" FOREIGN KEY ("sportifSeanceId") REFERENCES "SportifSeance"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
