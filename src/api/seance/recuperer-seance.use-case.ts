import { SeanceRepository } from './seance-repository';
import { SeanceWithIncludes } from "../dependency-injection";

export class RecupererSeanceUseCase {
  private seanceRepository: SeanceRepository;
  constructor(seanceRepository: SeanceRepository) {
    this.seanceRepository = seanceRepository;
  }

  async execute(id: string): Promise<{ data: SeanceWithIncludes }> {
    const seance = await this.seanceRepository.recupererSeance(id);
    return { data: seance };
  }
}
