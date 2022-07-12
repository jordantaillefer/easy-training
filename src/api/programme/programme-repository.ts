import { Programme, ProgrammeAvecIncludes } from '../entities/programme';
import { ProgrammeWithIncludes } from '../dependency-injection';

export interface ProgrammeRepository {
  listerProgramme(): Promise<Programme[]>
  recupererProgramme(id: string): Promise<ProgrammeWithIncludes | null>
  creerProgramme(programme: ProgrammeAvecIncludes): Promise<ProgrammeAvecIncludes>
}
