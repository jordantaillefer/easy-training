import faker from "@faker-js/faker"
import { v4 as uuid } from "uuid"

import { Factory } from "./factory"
import { Semaine } from "../../entities/semaine"
import { JourAvecIncludes } from "../../entities/jour"
import { JourFactory, ReturnJour } from "./jour.factory"

export interface SemaineOverrides extends Semaine {
  jours?: Partial<JourAvecIncludes> | Partial<JourAvecIncludes>[] | true
}
export type ReturnSemaine = Semaine & { jours?: ReturnJour[] }

export class SemaineFactory extends Factory<SemaineOverrides, ReturnSemaine> {
  generate(overrides?: Partial<SemaineOverrides>): ReturnSemaine {
    const createdAt = faker.date.past()
    return {
      id: uuid(),
      createdAt,
      updatedAt: faker.date.between(createdAt, new Date()),
      ...overrides,
      jours: this.generateManySiPresent(
        1,
        overrides?.jours,
        new JourFactory()
      )
    }
  }
}
