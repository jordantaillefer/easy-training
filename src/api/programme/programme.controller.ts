import { NextApiRequest, NextApiResponse } from 'next';

import { ListerProgrammeUseCase } from './lister-programme.use-case';
import { RecupererProgrammeUseCase } from './recuperer-programme.use-case';

export class ProgrammeController {
  private listerProgrammeUseCase: ListerProgrammeUseCase;
  private recupererProgrammeUseCase: RecupererProgrammeUseCase;

  constructor(
    listerProgrammeUseCase: ListerProgrammeUseCase,
    recupererProgrammeUseCase: RecupererProgrammeUseCase
  ) {
    this.listerProgrammeUseCase = listerProgrammeUseCase;
    this.recupererProgrammeUseCase = recupererProgrammeUseCase;
  }

  async listerProgramme(req: NextApiRequest, res: NextApiResponse) {
    const { data } = await this.listerProgrammeUseCase.execute();
    res.json(data);
  }

  async recupererProgramme(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query

    const { data } = await this.recupererProgrammeUseCase.execute(id as string);
    res.json(data);
  }
}
