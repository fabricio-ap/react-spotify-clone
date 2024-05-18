import { Table as AntTable } from 'antd';
import { AnyObject } from 'antd/es/_util/type';
import { ColumnsType } from 'antd/es/table';
import { Key } from 'react';
import styles from './Table.module.scss';

interface ITable<T> {
  column: ColumnsType<T>;
  dataSource: readonly T[];
}

export interface RenderedCell<RecordType> {
  props?: CellType<RecordType>;
  children?: React.ReactNode;
}

export interface CellType<RecordType> {
  key?: Key;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  column?: ColumnsType<RecordType>[number];
  colSpan?: number;
  rowSpan?: number;
  /** Only used for table header */
  hasSubColumns?: boolean;
  colStart?: number;
  colEnd?: number;
}

export function Table<T>({ column, dataSource }: ITable<T>) {
  return (
    <AntTable
      className={styles.table}
      columns={column as ColumnsType<AnyObject>}
      dataSource={dataSource as readonly AnyObject[]}
      pagination={false}
    />
  );
}
