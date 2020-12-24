import { IHttpResponse } from '@/contracts/http/IHttpResponse';

export const badRequest = (error: Error): IHttpResponse => ({
  statusCode: 400,
  error: { message: error.message },
});

export const forbidden = (error: Error): IHttpResponse => ({
  statusCode: 403,
  error: { message: error.message },
});

export const unauthorized = (): IHttpResponse => ({
  statusCode: 401,
  data: null,
});

export const serverError = (error: Error): IHttpResponse => ({
  statusCode: 500,
  error: { message: error.message || 'Unexpected error.' },
});

export const ok = (data: any): IHttpResponse => ({
  statusCode: 200,
  data,
});

export const created = (): IHttpResponse => ({
  statusCode: 201,
});

export const noContent = (): IHttpResponse => ({
  statusCode: 204,
  data: null,
});
