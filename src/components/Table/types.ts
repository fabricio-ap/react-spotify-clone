import { TableProps } from 'antd';

export type IColumnTable<T> = TableProps<T>['columns'][];

export type GetComponentProps<DataType> = (
  data: DataType,
  index?: number,
) => React.HTMLAttributes<unknown> & React.TdHTMLAttributes<unknown>;

export interface IOnRow {
  onClick?: () => void; // click row
  onDoubleClick?: () => void; // double click row
  onContextMenu?: () => void; // right button click row
  onMouseEnter?: () => void; // mouse enter row
  onMouseLeave?: () => void; // mouse leave row
}
