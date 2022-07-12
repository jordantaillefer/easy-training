import '@testing-library/jest-dom/extend-expect'
import { PrismaClient } from '@prisma/client';

const prismaClient = new PrismaClient()

beforeEach(async () => {
  await prismaClient.exerciceSeance.deleteMany({})
  await prismaClient.exercice.deleteMany({})
  await prismaClient.seance.deleteMany({})
  await prismaClient.jour.deleteMany({})
  await prismaClient.semaine.deleteMany({})
  await prismaClient.programme.deleteMany({})
})
