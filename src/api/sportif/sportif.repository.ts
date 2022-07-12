import { PrismaClient } from '@prisma/client';

export class SportifRepository {
  private client: PrismaClient;

  constructor(client: PrismaClient) {
    this.client = client;
  }

  async creerNouvelleSeance(
    listSportifExerciceSeance: SportifExerciceSeance[]
  ) {}
}
