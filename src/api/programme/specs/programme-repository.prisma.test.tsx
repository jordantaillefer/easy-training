import { v4 as uuid } from 'uuid'
import { PrismaClient } from '@prisma/client'

import Factory from '../../utils/factories'
import { ProgrammeRepositoryPrisma } from '../programme-repository.prisma'
import { ProgrammeAvecIncludes } from '../../entities/programme'

const prismaClient = new PrismaClient()

describe('Integ | ProgrammeRepositoryPrisma', () => {
  it('doit initialiser', () => {
    // Arrange
    const programmeRepository = new ProgrammeRepositoryPrisma(prismaClient)
    // Act
    expect(programmeRepository).toBeInstanceOf(ProgrammeRepositoryPrisma)
  })

  describe('ProgrammeRepositoryPrisma.creerProgramme', () => {
    it('Quand le programme envoyé est correct - doit créer le programme', async () => {
      // Arrange

      const programmeRepository = new ProgrammeRepositoryPrisma(prismaClient)
      const exercice1 = await prismaClient.exercice.create({ data: Factory.exercice.generate() })
      const programme: ProgrammeAvecIncludes = {
        id: uuid(),
        nomProgramme: 'programmeTest',
        createdAt: new Date(),
        updatedAt: new Date(),
        semaines: [
          {
            id: uuid(),
            createdAt: new Date(),
            updatedAt: new Date(),
            jours: [
              {
                id: uuid(),
                createdAt: new Date(),
                updatedAt: new Date(),
                jourDeSemaine: 0,
                seances: [
                  {
                    id: uuid(),
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    numSeance: 1,
                    exercicesSeance: [
                      {
                        id: uuid(),
                        createdAt: new Date(),
                        updatedAt: new Date(),
                        tempsRecup: 40,
                        nbSerie: 3,
                        nbRepetition: 10,
                        ordre: 0,
                        exercice: exercice1,
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      }
      // Act
      const programmeCree = await programmeRepository.creerProgramme(programme)
      // Assert
      expect(programmeCree).toBeDefined()
      expect(programmeCree).toMatchObject(programme)
    })
  })
})
