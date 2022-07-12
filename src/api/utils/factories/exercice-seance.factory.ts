import { v4 as uuid } from 'uuid'
import faker from "@faker-js/faker"

import { Factory } from "./factory"
import { ExerciceSeance } from "../../entities/exercice-seance"
import { Exercice } from "../../entities/exercice"

interface ExerciceSeanceAvecExercice extends ExerciceSeance {
  exercice?: Exercice
}

export class ExerciceSeanceFactory extends Factory<ExerciceSeanceAvecExercice> {
  generate(overrides?: Partial<ExerciceSeanceAvecExercice>): ExerciceSeanceAvecExercice {
    const createdAt = faker.date.past()
    return {
      id: uuid(),
      createdAt,
      updatedAt: faker.date.between(createdAt, new Date()),
      tempsRecup: faker.datatype.number({ min: 30, max: 90 }),
      ordre: 0,
      nbSerie: faker.datatype.number({ min: 1, max: 10 }),
      nbRepetition: faker.datatype.number({ min: 1, max: 16 }),
      ...overrides
    }
  }
}
