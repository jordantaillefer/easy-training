import { SeanceFactory } from "../seance.factory"
import { Seance } from "../../../entities/seance"

describe("SeanceFactory", () => {
  describe("SeanceFactory.generate", () => {
    it("quand on génère une instance - doit respecter l'interface de Seance", () => {
      // Arrange
      const seanceFactory = new SeanceFactory()
      // Act
      const seance = seanceFactory.generate()
      // Assert
      expect(seance).toHaveProperty("id")
      expect(seance).toHaveProperty("createdAt")
      expect(seance).toHaveProperty("updatedAt")
      expect(seance).toHaveProperty("numSeance")
    })

    it("quand on génère 2 instances - doit générer 2 instances différentes", () => {
      // Arrange
      const seanceFactory = new SeanceFactory()
      // Act
      const seance1 = seanceFactory.generate()
      const seance2 = seanceFactory.generate()
      // Assert
      expect(seance1.id).not.toEqual(seance2.id)
    })
    it("quand on passe des surcharges d'arguments - doit surcharger l'instance générée", () => {
      // Arrange
      const seanceFactory = new SeanceFactory()
      const overrides: Partial<Seance> = {
        numSeance: 2,
      }
      // Act
      const seance = seanceFactory.generate(overrides)
      // Assert
      expect(seance.numSeance).toEqual(overrides.numSeance)
    })
  })
})
