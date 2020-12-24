import { IHttpResponse } from '@/contracts/http/IHttpResponse';
import { IController } from '@/contracts/http/IController';
import { ok, serverError } from '@/contracts/http/IHttpHelpers';
import { IHttpRequest } from '@/contracts/http/IHttpRequest';
import { GetWordsUseCase } from '@/useCases/getWords/GetWordsUseCase';
import {
  GetWordsQueryDTO,
  GetWordsResponseDTO,
} from '@/useCases/getWords/GetWordsDTO';

export class GetWordsController implements IController {
  constructor(private getWordUseCase: GetWordsUseCase) {}

  async handle(
    request: IHttpRequest<any, any, GetWordsQueryDTO>
  ): Promise<IHttpResponse<GetWordsResponseDTO[]>> {
    try {
      const data = await this.getWordUseCase.execute(request.query);

      return ok(data);
    } catch (error) {
      return serverError(error);
    }
  }
}
