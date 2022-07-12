import { PrismaClient } from '@prisma/client'
import { Programme, ProgrammeAvecIncludes } from '../entities/programme'
import { ProgrammeRepository } from './programme-repository'

export class ProgrammeRepositoryPrisma implements ProgrammeRepository {
  private client: PrismaClient
  constructor(client: PrismaClient) {
    this.client = client
  }

  async listerProgramme(): Promise<Programme[]> {
    return this.client.programme.findMany()
  }

  async recupererProgramme(id: string): Promise<ProgrammeAvecIncludes | null> {
    return this.client.programme.findUnique({
      where: {
        id: id,
      },
      include: {
        semaines: {
          include: {
            jours: {
              include: {
                seances: {
                  include: {
                    exercicesSeance: {
                      orderBy: {
                        ordre: 'asc',
                      },
                      include: {
                        exercice: true,
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    })
  }

  async creerProgramme(programme: ProgrammeAvecIncludes): Promise<ProgrammeAvecIncludes> {
    return this.client.programme.create({
      data: {
        ...programme,
        semaines: {
          create: programme.semaines.map((semaine) => ({
            ...semaine,
            jours: {
              create: semaine.jours.map((jour) => ({
                ...jour,
                seances: {
                  create: jour.seances.map((seance) => ({
                    ...seance,
                    exercicesSeance: {
                      create: seance.exercicesSeance.map((exerciceSeance) => ({
                        ...exerciceSeance,
                        exercice: {
                          connect: {
                            id: exerciceSeance.exercice.id,
                          },
                        },
                      })),
                    },
                  })),
                },
              })),
            },
          })),
        },
      },
      include: {
        semaines: {
          include: {
            jours: {
              include: {
                seances: {
                  include: {
                    exercicesSeance: {
                      orderBy: {
                        ordre: 'asc',
                      },
                      include: {
                        exercice: true,
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    })
  }
}
