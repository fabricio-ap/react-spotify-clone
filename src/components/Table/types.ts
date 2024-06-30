import { ReactNode } from 'react';

export interface IColumnType<T> {
  title: string | ReactNode;
  dataIndex: keyof T;
  width?: number;
  align?: EColumnAlign;
  ellipsis?: boolean;
  render?: (record: T) => ReactNode;
}

export type EColumnAlign = 'left' | 'right' | 'center';
