import { ProgrammeFactory, ProgrammeOverrides } from "../programme.factory"

describe("ProgrammeFactory", () => {
  describe("ProgrammeFactory.generate", () => {
    it("quand on génère une instance - doit respecter l'interface de Programme", () => {
      // Arrange
      const programmeFactory = new ProgrammeFactory()
      // Act
      const programme = programmeFactory.generate()
      // Assert
      expect(programme).toHaveProperty("id")
      expect(programme).toHaveProperty("createdAt")
      expect(programme).toHaveProperty("updatedAt")
      expect(programme).toHaveProperty("nomProgramme")
    })

    it("quand on génère 2 instances - doit générer 2 instances différentes", () => {
      // Arrange
      const programmeFactory = new ProgrammeFactory()
      // Act
      const programme1 = programmeFactory.generate()
      const programme2 = programmeFactory.generate()
      // Assert
      expect(programme1.id).not.toEqual(programme2.id)
    })

    it("quand on passe des surcharges d'arguments - doit surcharger l'instance générée", () => {
      // Arrange
      const programmeFactory = new ProgrammeFactory()
      const overrides: Partial<ProgrammeOverrides> = {
        nomProgramme: "nom du programme",
      }
      // Act
      const programme = programmeFactory.generate(overrides)
      // Assert
      expect(programme.nomProgramme).toEqual(overrides.nomProgramme)
    })

    it("quand on demande une semaine sans surcharges - doit générer au moins une semaine aléatoire", () => {
      // Arrange
      const programmeFactory = new ProgrammeFactory()
      const overrides: Partial<ProgrammeOverrides> = {
        semaines: true,
      }
      // Act
      const programme = programmeFactory.generate(overrides)
      // Assert
      expect(programme.semaines).toBeDefined()
      expect(programme.semaines && programme.semaines[0].id).toBeDefined()
    })

    describe("quand on surcharge une semaine avec un objet", () => {

      it("quand l'objet est basique - doit générer au moins une semaine avec les surchages", () => {
        // Arrange
        const programmeFactory = new ProgrammeFactory()
        const createdAt = new Date("12/06/1993")

        // Act
        const programme = programmeFactory.generate({
          semaines: {
            createdAt,
          },
        })
        // Assert
        expect(programme.semaines).toBeDefined()
        expect(programme.semaines && programme.semaines[0].createdAt).toEqual(
          createdAt
        )
      })

      it("quand l'objet contient un tableau de jour - doit générer au moins une semaine avec les surchages", () => {
        // Arrange
        const programmeFactory = new ProgrammeFactory()
        const createdAt = new Date("12/06/1993")

        // Act
        const programme = programmeFactory.generate({
          semaines: {
            createdAt,
            jours: [
              {
                jourDeSemaine: 3,
              },
            ],
          },
        })
        // Assert
        expect(programme.semaines).toBeDefined()
        expect(
          programme.semaines &&
            programme.semaines[0] &&
            programme.semaines[0].jours &&
            programme.semaines[0].jours[0].jourDeSemaine
        ).toEqual(3)
      })

      it("quand l'objet contient un objet jour - doit générer au moins une semaine avec des jours surchargés par l'objet", () => {
        // Arrange
        const programmeFactory = new ProgrammeFactory()
        const createdAt = new Date("12/06/1993")

        // Act
        const programme = programmeFactory.generate({
          semaines: {
            createdAt,
            jours: {
              jourDeSemaine: 3,
            },
          },
        })
        // Assert
        expect(programme.semaines).toBeDefined()
        expect(
          programme.semaines &&
            programme.semaines[0] &&
            programme.semaines[0].jours &&
            programme.semaines[0].jours[0].jourDeSemaine
        ).toEqual(3)
      })

      it("quand l'objet contient un jour à true - doit générer au moins une semaine avec des jours surchargés par l'objet", () => {
        // Arrange
        const programmeFactory = new ProgrammeFactory()
        const createdAt = new Date("12/06/1993")

        // Act
        const programme = programmeFactory.generate({
          semaines: {
            createdAt,
            jours: true,
          },
        })
        // Assert
        expect(programme.semaines).toBeDefined()
        expect(
          programme.semaines &&
            programme.semaines[0] &&
            programme.semaines[0].jours &&
            programme.semaines[0].jours[0].id
        ).toBeDefined()
      })

    })

    describe("quand on surcharge une semaine avec un tableau", () => {
      it("quand le tableau est basique - doit générer au moins la semaine correspondant à la surcharge", () => {
        // Arrange
        const programmeFactory = new ProgrammeFactory()
        const createdAt = new Date("12/06/1993")
        // Act
        const programme = programmeFactory.generate({
          semaines: [
            {
              createdAt,
            },
          ],
        })
        // Assert
        expect(programme.semaines).toBeDefined()
        expect(programme.semaines && programme.semaines[0].createdAt).toEqual(
          createdAt
        )
      })

      it("quand le tableau contient un jour true - doit générer au moins la semaine correspondant à la surcharge", () => {
        // Arrange
        const programmeFactory = new ProgrammeFactory()
        const createdAt = new Date("12/06/1993")
        // Act
        const programme = programmeFactory.generate({
          semaines: [
            {
              createdAt,
              jours: true,
            },
          ],
        })
        // Assert
        expect(programme.semaines).toBeDefined()
        expect(
          programme.semaines &&
            programme.semaines[0] &&
            programme.semaines[0].jours &&
            programme.semaines[0].jours[0].id
        ).toBeDefined()
      })

      it("quand le tableau contient un objet jour - doit générer au moins la semaine correspondant à la surcharge", () => {
        // Arrange
        const programmeFactory = new ProgrammeFactory()
        const createdAt = new Date("12/06/1993")
        // Act
        const programme = programmeFactory.generate({
          semaines: [
            {
              createdAt,
              jours: {
                jourDeSemaine: 2,
              },
            },
          ],
        })
        // Assert
        expect(programme.semaines).toBeDefined()
        expect(
          programme.semaines &&
            programme.semaines[0] &&
            programme.semaines[0].jours &&
            programme.semaines[0].jours[0].jourDeSemaine
        ).toEqual(2)
      })

      it("quand le tableau contient un tableau de jour - doit générer au moins la semaine correspondant à la surcharge", () => {
        // Arrange
        const programmeFactory = new ProgrammeFactory()
        const createdAt = new Date("12/06/1993")
        // Act
        const programme = programmeFactory.generate({
          semaines: [
            {
              createdAt,
              jours: [
                {
                  jourDeSemaine: 2,
                },
              ],
            },
          ],
        })
        // Assert
        expect(programme.semaines).toBeDefined()
        expect(
          programme.semaines &&
            programme.semaines[0] &&
            programme.semaines[0].jours &&
            programme.semaines[0].jours[0].jourDeSemaine
        ).toEqual(2)
      })
    })
  })
})
