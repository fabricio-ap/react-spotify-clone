import '@/theme/global.scss';
import '@/theme/reset.scss';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AuthProvider } from './context';
import { Router } from './routes';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <div className='spotify'>
          <Router />
        </div>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
