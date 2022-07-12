import { NextApiRequest, NextApiResponse } from 'next';

import { DemarrerNouvelleSeanceUseCase } from './demarrer-nouvelle-seance.use-case';

export class SportifController {
  private demarrerNouvelleSeanceUseCase: DemarrerNouvelleSeanceUseCase;

  constructor(demarrerNouvelleSeanceUseCase: DemarrerNouvelleSeanceUseCase) {
    this.demarrerNouvelleSeanceUseCase = demarrerNouvelleSeanceUseCase;
  }

  async demarrerNouvelleSeance(req: NextApiRequest, res: NextApiResponse) {
    const { seanceId } = req.query;

    const { data } = await this.demarrerNouvelleSeanceUseCase.execute(
      seanceId as string
    );
    res.json(data);
  }
}
