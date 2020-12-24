import { IController } from '@/contracts/http/IController';
import { ok, serverError } from '@/contracts/http/IHttpHelpers';
import { IHttpRequest } from '@/contracts/http/IHttpRequest';
import { IHttpResponse } from '@/contracts/http/IHttpResponse';
import { GetWordByUseCase } from '@/useCases/getWordBy/GetWordByUseCase';
import {
  GetWordByQueryDTO,
  GetWordByResponseDTO,
} from '@/useCases/getWordBy/GetWordByDTO';

export class GetWordByController implements IController {
  constructor(private getWordByUseCase: GetWordByUseCase) {}

  async handle(
    request: IHttpRequest<any, any, GetWordByQueryDTO>
  ): Promise<IHttpResponse<GetWordByResponseDTO>> {
    try {
      const data = await this.getWordByUseCase.execute(request.query);

      return ok(data);
    } catch (error) {
      return serverError(error);
    }
  }
}
