import { v4 as uuid } from 'uuid'
import faker from "@faker-js/faker"

import { Exercice } from "../../entities/exercice"
import { ExerciceCategory } from "../enums/exercice-category.enum"
import { Factory } from "./factory"

export class ExerciceFactory extends Factory<Exercice> {
  generate(overrides?: Partial<Exercice>): Exercice {
    const createdAt = faker.date.past()
    const exerciceCategories = Object.values(ExerciceCategory)
    return {
      id: uuid(),
      createdAt,
      updatedAt: faker.date.between(createdAt, new Date()),
      categorie: exerciceCategories[faker.datatype.number({ min: 0, max: exerciceCategories.length - 1})],
      nomExercice: faker.lorem.words(2),
      ...overrides
    }
  }
}
