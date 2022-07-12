import { SportifRepository } from './sportif.repository';
import { SeanceWithIncludes } from "../dependency-injection";

export class DemarrerNouvelleSeanceUseCase {
  private sportifRepository: SportifRepository
  constructor(sportifRepository: SportifRepository) {
    this.sportifRepository = sportifRepository
  }

  async execute(id: string): Promise<{ data: SeanceWithIncludes }> {
    const seance = await this.sportifRepository.creerNouvelleSeance([]);
    return { data: seance };
  }
}
