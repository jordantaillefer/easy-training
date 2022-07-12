import { ProgrammeRepository } from './programme-repository'
import { Programme } from "../entities/programme"

export class ListerProgrammeUseCase {
  private programmeRepository: ProgrammeRepository
  constructor(programmeRepository: ProgrammeRepository) {
    this.programmeRepository = programmeRepository
  }

  async execute(): Promise<{ data: Programme[] }> {
    const programmes = await this.programmeRepository.listerProgramme()
    return { data: programmes }
  }
}
