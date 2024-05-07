import { unAuth } from '@/utils/spotifyService';
import type { AxiosInstance } from 'axios';
import axios from 'axios';
import { injectable } from 'inversify';
import { IHttpClient, IHttpGetParams, IHttpResponse } from './types';

import 'reflect-metadata';

@injectable()
export class AxiosAdapter implements IHttpClient {
  private api!: AxiosInstance;

  setup() {
    this.api = axios.create({
      baseURL: 'https://api.spotify.com/v1',
    });

    this.setInterceptors();
  }

  private setInterceptors() {
    this.api.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem('access_token');

        config.headers.Authorization = 'Bearer ' + token?.replace(/["]/g, '');

        return config;
      },
      (error) => {
        console.error(error);
      },
    );

    this.api.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        const isUnAuth = error.response?.status === 401;

        if (isUnAuth) {
          unAuth();
        }

        return Promise.reject(error);
      },
    );
  }

  async get<T>(params: IHttpGetParams): Promise<IHttpResponse<T>> {
    const request = await this.api.get(params.url, {
      params: params.queryParams,
      ...params.config,
    });

    return { ...request };
  }
}
