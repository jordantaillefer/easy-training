import { v4 as uuid } from 'uuid'

import { Factory } from "./factory"
import faker from "@faker-js/faker"
import { Jour, JourAvecIncludes } from "../../entities/jour"
import { Seance, SeanceAvecIncludes } from "../../entities/seance"
import { Semaine } from "../../entities/semaine"

export interface JourOverrides extends Semaine {
  seance?: Partial<JourAvecIncludes> | Partial<JourAvecIncludes>[] | true
}
export type ReturnJour = Jour & { seances?: Seance[] | SeanceAvecIncludes[] }

export class JourFactory extends Factory<JourOverrides, ReturnJour> {
  generate(overrides?: Partial<JourOverrides>): ReturnJour {
    const createdAt = faker.date.past()
    return {
      id: uuid(),
      createdAt,
      updatedAt: faker.date.between(createdAt, new Date()),
      jourDeSemaine: 0,
      ...overrides
    }
  }
}
