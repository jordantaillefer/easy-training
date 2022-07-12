import faker from "@faker-js/faker"
import { v4 as uuid } from "uuid"

import { Factory } from "./factory"
import { ReturnSemaine, SemaineFactory, SemaineOverrides } from "./semaine.factory"
import { Programme } from "../../entities/programme"

export interface ProgrammeOverrides extends Programme {
  semaines?:
    | Partial<SemaineOverrides>
    | Partial<SemaineOverrides>[]
    | true
}

type ReturnProgramme = Programme & {
  semaines?: ReturnSemaine[]
}

export class ProgrammeFactory extends Factory<ProgrammeOverrides, ReturnProgramme> {
  generate(
    overrides?: Partial<ProgrammeOverrides>
  ): ReturnProgramme {
    const createdAt = faker.date.past()
    return {
      id: uuid(),
      createdAt,
      updatedAt: faker.date.between(createdAt, new Date()),
      nomProgramme: faker.lorem.words(2),
      ...overrides,
      semaines: this.generateManySiPresent(
        1,
        overrides?.semaines,
        new SemaineFactory()
      ),
    }
  }
}
