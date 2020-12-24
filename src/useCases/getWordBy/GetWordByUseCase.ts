import { IWordRepository } from '@/repositories/wordRepository/IWordRepository';
import {
  GetWordByQueryDTO,
  GetWordByResponseDTO,
} from '@/useCases/getWordBy/GetWordByDTO';

export class GetWordByUseCase {
  constructor(private wordRepository: IWordRepository) {}

  async execute(query: GetWordByQueryDTO): Promise<GetWordByResponseDTO> {
    const word = await this.wordRepository.getBy(query);

    return GetWordByResponseDTO.map(word);
  }
}
