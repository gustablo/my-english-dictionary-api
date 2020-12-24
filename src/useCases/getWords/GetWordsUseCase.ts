import { IWordRepository } from '@/repositories/wordRepository/IWordRepository';
import {
  GetWordsQueryDTO,
  GetWordsResponseDTO,
} from '@/useCases/getWords/GetWordsDTO';

export class GetWordsUseCase {
  constructor(private wordRepository: IWordRepository) {}

  async execute(query: GetWordsQueryDTO): Promise<GetWordsResponseDTO[]> {
    const words = await this.wordRepository.index(query.page, query.limit);

    return GetWordsResponseDTO.mapCollection(words);
  }
}
