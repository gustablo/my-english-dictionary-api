import { PrismaWordRepository } from '@/repositories/wordRepository/implementations/PrismaWordRepository';
import { CreateWordController } from '@/useCases/createWord/CreateWordController';
import { CreateWordUseCase } from '@/useCases/createWord/CreateWordUseCase';

const prismaWordRepository = new PrismaWordRepository();

const createWordUseCase = new CreateWordUseCase(prismaWordRepository);
const createWordController = new CreateWordController(createWordUseCase);

export { createWordController };
