import { NextApiRequest, NextApiResponse } from 'next';

import { RecupererSeanceUseCase } from './recuperer-seance.use-case';

export class SeanceController {
  private recupererSeanceUseCase: RecupererSeanceUseCase;

  constructor(
    recupererSeanceUseCase: RecupererSeanceUseCase
  ) {
    this.recupererSeanceUseCase = recupererSeanceUseCase;
  }

  async recupererSeance(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query

    const { data } = await this.recupererSeanceUseCase.execute(id as string);
    res.json(data);
  }
}
