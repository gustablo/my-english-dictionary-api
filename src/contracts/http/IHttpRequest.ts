export interface IHttpRequest<T = any, P = any, Q = any> {
  body?: T;
  params?: P;
  query: Q;
}
