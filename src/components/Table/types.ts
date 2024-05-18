import { TableProps } from 'antd';

export type ICellAlign = 'start' | 'center' | 'end';

export type IColumnTable<T> = TableProps<T>['columns'][];

export type IDataSource<T> = {
  [K in keyof T]: T[K];
};
