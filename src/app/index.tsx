import { Router } from '@/routes';
import { ProvidersTree } from './Provider';

import '@/theme/global.scss';
import '@/theme/reset.scss';

export function App() {
  return (
    <ProvidersTree>
      <div className='spotify'>
        <Router />
      </div>
    </ProvidersTree>
  );
}
