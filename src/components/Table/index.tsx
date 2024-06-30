import classNames from 'classnames';
import { Column } from './Column';
import styles from './Table.module.scss';
import { IColumnType } from './types';

interface ITable<T> {
  column: IColumnType<T>[];
  dataSource: readonly T[];
  onHover?: (value: T | undefined) => void;
  onHoverOut?: () => void;
}

export function Table<T>({
  column,
  dataSource,
  onHover = () => {},
  onHoverOut = () => {},
}: ITable<T>) {
  const classname = {
    headerRow: classNames(styles.table__header, styles.table__row),
    bodyRow: classNames(styles.table__body, styles.table__row),
  };

  return (
    <div className={styles.table}>
      <header className={classname.headerRow}>
        {column.map((col) => (
          <Column key={col.dataIndex as string} {...col}>
            {col.title}
          </Column>
        ))}
      </header>

      {dataSource.map((row, index) => (
        <div
          key={index}
          className={classname.bodyRow}
          onMouseEnter={() => onHover(row)}
          onMouseLeave={() => onHoverOut()}
        >
          {column.map((col) => (
            <Column key={col.dataIndex as string} {...col}>
              {col.render ? col.render(row) : (row[col.dataIndex] as string)}
            </Column>
          ))}
        </div>
      ))}
    </div>
  );
}
