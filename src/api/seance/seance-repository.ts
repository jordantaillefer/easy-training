import { PrismaClient } from '@prisma/client';

export class SeanceRepository {
  private client: PrismaClient;
  constructor(client: PrismaClient) {
    this.client = client;
  }

  async recupererSeance(id: string) {
    const seance = await this.client.seance.findUnique({
      where: {
        id: id,
      },
      include: {
        exercicesSeance: {
          orderBy: {
            ordre: 'asc',
          },
          include: {
            exercice: true,
          },
        },
      },
    });

    return seance;
  }
}
