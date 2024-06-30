import classNames from 'classnames';
import { ReactNode } from 'react';
import { IColumnType } from '../types';
import styles from './Column.module.scss';

interface IColumn<T> extends IColumnType<T> {
  children: ReactNode;
}

export function Column<T>({ children, ...col }: IColumn<T>) {
  const classname = classNames(styles.column, styles[`column--${col.align || 'left'}`], {
    [styles[`column--no-flex`]]: col.width,
    [styles[`column--ellipsis`]]: col.ellipsis,
  });

  return (
    <div
      className={classname}
      style={{
        width: `${col.width}px`,
      }}
    >
      {children}
    </div>
  );
}
