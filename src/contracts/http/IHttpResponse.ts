export interface IHttpResponse<T = any> {
  statusCode: number;
  data?: T;
  error?: { message: string };
}
