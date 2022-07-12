import Prisma from '@prisma/client';
import {
  ExerciceSeance,
  ExerciceSeanceAvecIncludes,
} from './exercice-seance';

export type Seance = Omit<Prisma.Seance, 'jourId'>

export interface SeanceAvecExercicesSeance {
  exercicesSeance: ExerciceSeance[];
}

export interface SeanceAvecIncludes extends Seance {
  exercicesSeance: ExerciceSeanceAvecIncludes[];
}
