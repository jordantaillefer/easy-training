import Prisma from '@prisma/client';
import { v4 as uuid } from 'uuid';

import { initJour, JourAvecIncludes } from "./jour";

export type Semaine = Omit<Prisma.Semaine, 'programmeId'>

export interface SemaineAvecIncludes extends Semaine {
  jours: JourAvecIncludes[];
}

export function initSemaine(): SemaineAvecIncludes {
  const jours: JourAvecIncludes[] = []
  for (let i = 0; i < 7; i++) {
    jours.push(initJour(i))
  }

  return {
    id: uuid(),
    createdAt: new Date(),
    updatedAt: new Date(),
    jours
  };
}

