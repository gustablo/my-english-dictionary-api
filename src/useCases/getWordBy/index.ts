import { PrismaWordRepository } from '@/repositories/wordRepository/implementations/PrismaWordRepository';
import { GetWordByController } from '@/useCases/getWordBy/GetWordByController';
import { GetWordByUseCase } from '@/useCases/getWordBy/GetWordByUseCase';

const prismaWordRepository = new PrismaWordRepository();
const getWordByUseCase = new GetWordByUseCase(prismaWordRepository);
const getWordByController = new GetWordByController(getWordByUseCase);

export { getWordByController };
