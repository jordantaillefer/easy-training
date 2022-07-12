import { ExerciceFactory } from "../exercice.factory"
import { ExerciceCategory } from "../../enums/exercice-category.enum"
import { Exercice } from "../../../entities/exercice"

describe("ExerciceFactory", () => {
  describe("ExerciceFactory.generate", () => {
    it("quand on génère une instance - doit respecter l'interface d'Exercice", () => {
      // Arrange
      const exerciceFactory = new ExerciceFactory()
      // Act
      const exercice = exerciceFactory.generate()
      // Assert
      expect(exercice).toHaveProperty("id")
      expect(exercice).toHaveProperty("createdAt")
      expect(exercice).toHaveProperty("updatedAt")
      expect(exercice).toHaveProperty("nomExercice")
      expect(exercice).toHaveProperty("categorie")
    })

    it("quand on génère 2 instances - doit générer 2 instances différentes", () => {
      // Arrange
      const exerciceFactory = new ExerciceFactory()
      // Act
      const exercice1 = exerciceFactory.generate()
      const exercice2 = exerciceFactory.generate()
      // Assert
      expect(exercice1.id).not.toEqual(exercice2.id)
      expect(exercice1.nomExercice).not.toEqual(exercice2.nomExercice)
    })
    it("quand on passe des surcharges d'arguments - doit surcharger l'instance générée", () => {
      // Arrange
      const exerciceFactory = new ExerciceFactory()
      const overrides: Partial<Exercice> = {
        nomExercice: 'nom exercice',
        categorie: ExerciceCategory.PECTORAUX
      }
      // Act
      const exercice = exerciceFactory.generate(overrides)
      // Assert
      expect(exercice.nomExercice).toEqual(overrides.nomExercice)
      expect(exercice.categorie).toEqual(overrides.categorie)
    })
  })
})
