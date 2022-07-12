import { ProgrammeFactory } from "./programme.factory"
import { ExerciceFactory } from "./exercice.factory"
import { SemaineFactory } from "./semaine.factory"
import { JourFactory } from "./jour.factory"
import { SeanceFactory } from "./seance.factory"
import { ExerciceSeanceFactory } from "./exercice-seance.factory"

const programme = new ProgrammeFactory()
const semaine = new SemaineFactory()
const jour = new JourFactory()
const seance = new SeanceFactory()
const exerciceSeance = new ExerciceSeanceFactory()
const exercice = new ExerciceFactory()

export default {
  exercice,
  programme,
  semaine,
  jour,
  seance,
  exerciceSeance
}
