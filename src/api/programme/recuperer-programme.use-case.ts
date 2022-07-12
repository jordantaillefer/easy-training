import { ProgrammeRepositoryPrisma } from './programme-repository.prisma';
import { ProgrammeWithIncludes } from '../dependency-injection';

export class RecupererProgrammeUseCase {
  private programmeRepository: ProgrammeRepositoryPrisma;
  constructor(programmeRepository: ProgrammeRepositoryPrisma) {
    this.programmeRepository = programmeRepository;
  }

  async execute(id: string): Promise<{ data: ProgrammeWithIncludes }> {
    const programmes = await this.programmeRepository.recupererProgramme(id);
    return { data: programmes };
  }
}
