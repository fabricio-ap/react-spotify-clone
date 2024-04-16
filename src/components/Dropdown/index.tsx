import { Dropdown as AntDropdown, DropDownProps } from 'antd';
import { ReactNode } from 'react';
import styles from './Dropdown.module.scss';

interface IDropdown {
  children: ReactNode;
  menu: IMenu[];
}

interface IMenu {
  key: string;
  label: string;
  onClick: () => void;
}

export function Dropdown({ children, menu }: IDropdown & DropDownProps) {
  console.log({ menu });

  return (
    <AntDropdown
      menu={{ items: menu }}
      trigger={['click']}
      placement='bottomRight'
      overlayClassName={styles.dropdown}
    >
      {children}
    </AntDropdown>
  );
}
