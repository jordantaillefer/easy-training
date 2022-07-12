import { ExerciceSeanceFactory } from "../exercice-seance.factory"
import { ExerciceSeance } from "../../../entities/exercice-seance"

describe("ExerciceSeanceFactory", () => {
  describe("ExerciceSeanceFactory.generate", () => {
    it("quand on génère une instance - doit respecter l'interface d'ExerciceSeance", () => {
      // Arrange
      const exerciceSeanceFactory = new ExerciceSeanceFactory()
      // Act
      const exercice = exerciceSeanceFactory.generate()
      // Assert
      expect(exercice).toHaveProperty("id")
      expect(exercice).toHaveProperty("createdAt")
      expect(exercice).toHaveProperty("updatedAt")
      expect(exercice).toHaveProperty("tempsRecup")
      expect(exercice).toHaveProperty("ordre")
      expect(exercice).toHaveProperty("nbSerie")
      expect(exercice).toHaveProperty("nbRepetition")
    })

    it("quand on génère 2 instances - doit générer 2 instances différentes", () => {
      // Arrange
      const exerciceSeanceFactory = new ExerciceSeanceFactory()
      // Act
      const exerciceSeance1 = exerciceSeanceFactory.generate()
      const exerciceSeance2 = exerciceSeanceFactory.generate()
      // Assert
      expect(exerciceSeance1.id).not.toEqual(exerciceSeance2.id)
    })
    it("quand on passe des surcharges d'arguments - doit surcharger l'instance générée", () => {
      // Arrange
      const exerciceSeanceFactory = new ExerciceSeanceFactory()
      const overrides: Partial<ExerciceSeance> = {
        tempsRecup: 40,
        nbSerie: 3
      }
      // Act
      const exercice = exerciceSeanceFactory.generate(overrides)
      // Assert
      expect(exercice.tempsRecup).toEqual(overrides.tempsRecup)
      expect(exercice.nbSerie).toEqual(overrides.nbSerie)
    })
  })
})
