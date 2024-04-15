import { HTMLAttributes, createElement } from 'react';
import { icons } from './icons';

export type IconName = keyof typeof icons;

interface IIcon extends HTMLAttributes<HTMLDivElement> {
  icon: IconName;
  className?: string;
}

export function Icon({ icon, className, ...props }: IIcon) {
  const element = createElement(icons[icon], {
    style: { width: '24px', height: '24px' },
  });

  return (
    <div
      className={className}
      role='img'
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      {...props}
    >
      {element}
    </div>
  );
}
