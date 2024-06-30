import { queryClient } from '@/config/reactQuery';
import { AuthProvider } from '@/context';
import { antTheme } from '@/theme/antd';
import { QueryClientProvider } from '@tanstack/react-query';
import { ConfigProvider } from 'antd';
import { ElementType } from 'react';

type ProvidersType = [ElementType, Record<string, unknown>];

type ChildrenType = {
  children: Array<ElementType>;
};

const buildProvidersTree = (componentsWithProps: Array<ProvidersType>) => {
  const initialComponent = ({ children }: ChildrenType) => <>{children}</>;

  return componentsWithProps.reduce(
    (AccumulatedComponents: React.ElementType, [Provider, props = {}]: ProvidersType) => {
      return ({ children }: ChildrenType) => {
        return (
          <AccumulatedComponents>
            <Provider {...props}>{children}</Provider>
          </AccumulatedComponents>
        );
      };
    },
    initialComponent,
  );
};

export const ProvidersTree = buildProvidersTree([
  [QueryClientProvider, { client: queryClient }],
  [ConfigProvider, { theme: antTheme }],
  [AuthProvider, {}],
]);
