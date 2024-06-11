import { Table as AntTable } from 'antd';
import { AnyObject } from 'antd/es/_util/type';
import { ColumnsType } from 'antd/es/table';
import styles from './Table.module.scss';
import { GetComponentProps, IOnRow } from './types';

interface ITable<T> {
  column: ColumnsType<T>;
  dataSource: readonly T[];
  onRow?: (record: T, rowIndex: number) => IOnRow;
}

export function Table<T>({ column, dataSource, onRow, ...props }: ITable<T>) {
  return (
    <AntTable
      {...props}
      className={styles.table}
      columns={column as ColumnsType<AnyObject>}
      dataSource={dataSource as readonly AnyObject[]}
      pagination={false}
      onRow={onRow as GetComponentProps<AnyObject>}
    />
  );
}
