import { NextApiRequest, NextApiResponse } from 'next';
import { seanceController } from '../../../src/api/dependency-injection';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;
  try {
    switch (method) {
      case 'GET': {
        await seanceController.recupererSeance(req, res);
        break;
      }
      default: {
        res.writeHead(405, {
          Allow: ['GET', 'POST'],
        });
      }
    }
  } catch (e) {
    console.log(e);
  }

  res.end();
};
