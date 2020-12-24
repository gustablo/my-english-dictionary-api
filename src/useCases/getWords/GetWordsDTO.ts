import { Word } from '@/entities/Word';

export class GetWordsResponseDTO {
  significa: string;
  word: string;
  translate: string;

  static map(word: Word): GetWordsResponseDTO {
    return {
      significa: word.means,
      translate: word.translate,
      word: word.word,
    };
  }

  static mapCollection(words: Word[]): GetWordsResponseDTO[] {
    return words.map(GetWordsResponseDTO.map);
  }
}

export type GetWordsQueryDTO = {
  page: number;
  limit: number;
};
