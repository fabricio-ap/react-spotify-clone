import { CSSProperties, HTMLAttributes, createElement } from 'react';
import { icons } from './icons';

export type IconName = keyof typeof icons;

interface IIcon extends HTMLAttributes<HTMLDivElement> {
  icon: IconName;
  className?: string;
  size?: number;
}

export function Icon({ icon, className, size, ...props }: IIcon) {
  const _size = `${size || 24}px`;

  const element = createElement(icons[icon], {
    style: { width: _size, height: _size },
  });

  const iconStyle: CSSProperties = {
    width: _size,
    height: _size,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <div className={className} role='textbox' style={iconStyle} {...props}>
      {element}
    </div>
  );
}
