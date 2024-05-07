import { queryClient } from '@/config/reactQuery';
import { AuthProvider } from '@/context';
import { Router } from '@/routes';
import { QueryClientProvider } from '@tanstack/react-query';
import { ConfigProvider } from 'antd';

import { antTheme } from '@/theme/antd';
import '@/theme/global.scss';
import '@/theme/reset.scss';

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ConfigProvider theme={antTheme}>
        <AuthProvider>
          <div className='spotify'>
            <Router />
          </div>
        </AuthProvider>
      </ConfigProvider>
    </QueryClientProvider>
  );
}
