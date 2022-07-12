import Prisma from '@prisma/client';
import { SeanceAvecIncludes } from "./seance";
import { v4 as uuid } from "uuid";

export type Jour = Omit<Prisma.Jour, 'semaineId'>

export interface JourAvecIncludes extends Jour {
  seances: SeanceAvecIncludes[];
}

export function initJour(jourDeSemaine: number): JourAvecIncludes {
  return {
    id: uuid(),
    seances: [],
    createdAt: new Date(),
    updatedAt: new Date(),
    jourDeSemaine
  }
}
