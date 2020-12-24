import { PrismaWordRepository } from '@/repositories/wordRepository/implementations/PrismaWordRepository';
import { GetWordsController } from '@/useCases/getWords/GetWordsController';
import { GetWordsUseCase } from '@/useCases/getWords/GetWordsUseCase';

const prismaWordRepository = new PrismaWordRepository();

const getWordsUseCase = new GetWordsUseCase(prismaWordRepository);
const getWordsController = new GetWordsController(getWordsUseCase);

export { getWordsController };
