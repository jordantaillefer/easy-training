import { Prisma, PrismaClient } from '@prisma/client'

import { ProgrammeRepositoryPrisma } from './programme/programme-repository.prisma'
import { ListerProgrammeUseCase } from './programme/lister-programme.use-case'
import { RecupererProgrammeUseCase } from './programme/recuperer-programme.use-case'
import { ProgrammeController } from './programme/programme.controller'
import { SeanceRepository } from './seance/seance-repository'
import { RecupererSeanceUseCase } from './seance/recuperer-seance.use-case'
import { SeanceController } from './seance/seance.controller'
import { SportifController } from './sportif/sportif.controller'
import { SportifRepository } from './sportif/sportif.repository'
import { DemarrerNouvelleSeanceUseCase } from './sportif/demarrer-nouvelle-seance.use-case'

const prismaClient = new PrismaClient()

// Programme
const programmeRepository = new ProgrammeRepositoryPrisma(prismaClient)
export const listerProgrammeUseCase = new ListerProgrammeUseCase(programmeRepository)
export const recupererProgrammeUseCase = new RecupererProgrammeUseCase(
  programmeRepository
)

export const programmeController = new ProgrammeController(
  listerProgrammeUseCase,
  recupererProgrammeUseCase
)

// Seance
const seanceRepository = new SeanceRepository(prismaClient)
const recupererSeanceUseCase = new RecupererSeanceUseCase(seanceRepository)

export const seanceController = new SeanceController(recupererSeanceUseCase)

// Sportif
const sportifRepository = new SportifRepository(prismaClient)
const demarrerNouvelleSeanceUseCase = new DemarrerNouvelleSeanceUseCase(
  sportifRepository
)

export const sportifController = new SportifController(
  demarrerNouvelleSeanceUseCase
)

export type ProgrammeWithIncludes = Prisma.PromiseReturnType<
  typeof programmeRepository.recupererProgramme
>
export type SeanceWithIncludes = Prisma.PromiseReturnType<
  typeof seanceRepository.recupererSeance
>

export * from '../../shared/models'
