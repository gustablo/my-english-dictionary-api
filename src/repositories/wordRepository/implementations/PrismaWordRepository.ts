import { Word } from '@/entities/Word';
import { prisma } from '@/repositories/prisma';
import { IWordRepository } from '@/repositories/wordRepository/IWordRepository';

export class PrismaWordRepository implements IWordRepository {
  async create(data: Word): Promise<void> {
    await prisma.word.create({
      data,
    });
  }

  async index(page: number, limit: number): Promise<Word[]> {
    const words = await prisma.word.findMany({
      skip: Number(page),
      take: Number(limit),
    });

    return words;
  }

  async getBy(filter: Partial<Word>): Promise<Word> {
    const word = await prisma.word.findFirst({
      where: filter,
    });

    return word;
  }
}
