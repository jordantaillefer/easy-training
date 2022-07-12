import Prisma from '@prisma/client';
import { v4 as uuid } from 'uuid';

import { initSemaine, Semaine, SemaineAvecIncludes } from "./semaine"

export type Programme = Prisma.Programme

export interface ProgrammeAvecIncludes extends Programme {
  semaines: SemaineAvecIncludes[] | Semaine[];
}

export function initProgramme(): ProgrammeAvecIncludes {
  const nbSemaine = 6
  const semaines: SemaineAvecIncludes[] = []
  for (let i = 0; i < nbSemaine; i++) {
    semaines.push(initSemaine())
  }
  return {
    id: uuid(),
    createdAt: new Date(),
    updatedAt: new Date(),
    nomProgramme: 'Programme Jojo',
    semaines
  }
}
