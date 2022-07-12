import { v4 as uuid } from 'uuid'

import { Factory } from "./factory"
import faker from "@faker-js/faker"
import { Seance } from "../../entities/seance"

export class SeanceFactory extends Factory<Seance> {
  generate(overrides?: Partial<Seance>): Seance {
    const createdAt = faker.date.past()
    return {
      id: uuid(),
      createdAt,
      updatedAt: faker.date.between(createdAt, new Date()),
      numSeance: 0,
      ...overrides
    }
  }
}
