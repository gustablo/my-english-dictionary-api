import { IHttpResponse } from '@/contracts/http/IHttpResponse';
import { IHttpRequest } from '@/contracts/http/IHttpRequest';

export interface IController {
  handle(request?: IHttpRequest): Promise<IHttpResponse>;
}
