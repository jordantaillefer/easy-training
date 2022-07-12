import { JourFactory } from "../jour.factory"
import { Jour } from "../../../entities/jour"

describe("JourFactory", () => {
  describe("JourFactory.generate", () => {
    it("quand on génère une instance - doit respecter l'interface de Jour", () => {
      // Arrange
      const jourFactory = new JourFactory()
      // Act
      const jour = jourFactory.generate()
      // Assert
      expect(jour).toHaveProperty("id")
      expect(jour).toHaveProperty("createdAt")
      expect(jour).toHaveProperty("updatedAt")
      expect(jour).toHaveProperty("jourDeSemaine")
    })

    it("quand on génère 2 instances - doit générer 2 instances différentes", () => {
      // Arrange
      const jourFactory = new JourFactory()
      // Act
      const jour1 = jourFactory.generate()
      const jour2 = jourFactory.generate()
      // Assert
      expect(jour1.id).not.toEqual(jour2.id)
    })
    it("quand on passe des surcharges d'arguments - doit surcharger l'instance générée", () => {
      // Arrange
      const jourFactory = new JourFactory()
      const overrides: Partial<Jour> = {
        jourDeSemaine: 1
      }
      // Act
      const jour = jourFactory.generate(overrides)
      // Assert
      expect(jour.jourDeSemaine).toEqual(overrides.jourDeSemaine)
    })
  })
})
