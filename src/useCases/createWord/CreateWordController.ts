import { IController } from '@/contracts/http/IController';
import { IHttpRequest } from '@/contracts/http/IHttpRequest';
import { IHttpResponse } from '@/contracts/http/IHttpResponse';
import { created, serverError } from '@/contracts/http/IHttpHelpers';
import { CreateWordUseCase } from '@/useCases/createWord/CreateWordUseCase';
import { CreateWordRequestDTO } from '@/useCases/createWord/CreateWordDTO';

export class CreateWordController implements IController {
  constructor(private createWordUseCase: CreateWordUseCase) {}

  async handle(
    request: IHttpRequest<CreateWordRequestDTO>
  ): Promise<IHttpResponse> {
    const { word, means, translate } = request.body;

    try {
      await this.createWordUseCase.execute({ word, means, translate });

      return created();
    } catch (error) {
      return serverError(error);
    }
  }
}
