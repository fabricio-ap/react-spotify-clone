import { injectable } from 'inversify';
import { AxiosAdapter } from '../AxiosAdapter';

import 'reflect-metadata';

@injectable()
export class HttpClient extends AxiosAdapter {
  constructor() {
    super();

    this.setup();
  }
}
