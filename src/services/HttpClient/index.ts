import { AxiosAdapter } from '@/plugin/AxiosAdapter';
import { injectable } from 'inversify';

import 'reflect-metadata';

@injectable()
export class HttpClient extends AxiosAdapter {
  constructor() {
    super();

    this.setup();
  }
}
