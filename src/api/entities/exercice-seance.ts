import Prisma from '@prisma/client';
import { Exercice } from "./exercice";

export type ExerciceSeance = Omit<Prisma.ExerciceSeance, 'seanceId' | 'exerciceId'>

export interface ExerciceSeanceAvecIncludes extends ExerciceSeance {
  exercice: Exercice;
}
