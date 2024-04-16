import { IUser } from '@/types/IUser';
import { Dropdown } from '../Dropdown';
import { Icon } from '../Icon';
import { Tooltip } from '../Tooltip';
import styles from './Header.module.scss';

interface IHeader {
  profile: IUser;
  onSignOut: () => void;
}

export function Header({ profile, onSignOut }: IHeader) {
  const { display_name, images } = profile;

  const menu = [
    {
      key: 'signOut',
      label: 'Sair',
      icon: <Icon icon='exit' />,
      onClick: onSignOut,
    },
  ];

  return (
    <div className={styles.header}>
      <Dropdown menu={menu}>
        <div className={styles.header__avatar}>
          <Tooltip text={display_name} placement='right'>
            <img src={images[0].url} alt={display_name} />
          </Tooltip>
        </div>
      </Dropdown>
    </div>
  );
}
