import { Word } from '@/entities/Word';

export type GetWordByQueryDTO = Word;

export class GetWordByResponseDTO {
  word: string;
  means: string;
  translate: string;

  static map(word: Word): GetWordByResponseDTO {
    return {
      word: word.word,
      means: word.means,
      translate: word.translate,
    };
  }
}
