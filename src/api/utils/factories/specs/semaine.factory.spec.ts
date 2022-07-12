import { SemaineFactory } from "../semaine.factory"
import { Semaine } from "../../../entities/semaine"

describe("SemaineFactory", () => {
  describe("SemaineFactory.generate", () => {
    it("quand on génère une instance - doit respecter l'interface de Semaine", () => {
      // Arrange
      const semaineFactory = new SemaineFactory()
      // Act
      const semaine = semaineFactory.generate()
      // Assert
      expect(semaine).toHaveProperty("id")
      expect(semaine).toHaveProperty("createdAt")
      expect(semaine).toHaveProperty("updatedAt")
    })

    it("quand on génère 2 instances - doit générer 2 instances différentes", () => {
      // Arrange
      const semaineFactory = new SemaineFactory()
      // Act
      const semaine1 = semaineFactory.generate()
      const semaine2 = semaineFactory.generate()
      // Assert
      expect(semaine1.id).not.toEqual(semaine2.id)
    })
    it("quand on passe des surcharges d'arguments - doit surcharger l'instance générée", () => {
      // Arrange
      const semaineFactory = new SemaineFactory()
      const overrides: Partial<Semaine> = {
        createdAt: new Date('12/06/1993')
      }
      // Act
      const semaine = semaineFactory.generate(overrides)
      // Assert
      expect(semaine.createdAt).toEqual(overrides.createdAt)
    })
  })
})
