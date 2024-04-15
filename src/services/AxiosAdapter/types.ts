import { HttpStatusCode } from 'axios';

export interface IHttpClient {
  get<T>(params: IHttpGetParams): Promise<IHttpResponse<T>>;
}

export interface IHttpGetParams {
  url: string;
  queryParams?: unknown;
  config?: Record<string, unknown>;
}

export interface IHttpResponse<T = unknown> {
  status: HttpStatusCode;
  data?: T;
  headers?: Record<string, unknown>;
}
