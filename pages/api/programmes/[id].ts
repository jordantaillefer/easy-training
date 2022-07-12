import { NextApiRequest, NextApiResponse } from 'next';
import { programmeController } from '../../../src/api/dependency-injection';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;
  try {
    switch (method) {
      case 'GET': {
        await programmeController.recupererProgramme(req, res);
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
