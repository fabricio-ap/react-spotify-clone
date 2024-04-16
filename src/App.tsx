import '@/theme/global.scss';
import '@/theme/reset.scss';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ConfigProvider } from 'antd';
import { AliasToken } from 'antd/es/theme/internal';
import { AuthProvider } from './context';
import { Router } from './routes';
import { tokens } from './theme/tokens';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const theme: Partial<AliasToken> = {
  fontFamily: tokens.fontFamily,
};

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ConfigProvider
        theme={{
          token: theme,
          components: {
            Tooltip: {
              colorBgSpotlight: tokens.backgroundPress,
            },
            Dropdown: {
              colorBgElevated: tokens.backgroundPress,
              colorText: tokens.colorTextBase,
              controlItemBgHover: tokens.backgroundBase,
            },
          },
        }}
      >
        <AuthProvider>
          <div className='spotify'>
            <Router />
          </div>
        </AuthProvider>
      </ConfigProvider>
    </QueryClientProvider>
  );
}

export default App;
