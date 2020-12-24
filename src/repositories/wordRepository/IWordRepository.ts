import { Word } from '@/entities/Word';

export interface IWordRepository {
  create(data: Word): Promise<void>;
  index(page: number, limit: number): Promise<Word[]>;
  getBy(filter: Partial<Word>): Promise<Word>;
}
