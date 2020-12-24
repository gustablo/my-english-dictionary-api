import { IWordRepository } from '@/repositories/wordRepository/IWordRepository';
import { CreateWordRequestDTO } from '@/useCases/createWord/CreateWordDTO';

export class CreateWordUseCase {
  constructor(private wordRepository: IWordRepository) {}

  async execute(data: CreateWordRequestDTO): Promise<void> {
    return await this.wordRepository.create({ ...data });
  }
}
