import { Tooltip as AntTooltip, TooltipProps } from 'antd';
import { ReactNode } from 'react';

interface ITooltip {
  children: ReactNode;
  text: string;
}

export function Tooltip({ children, text, placement }: ITooltip & TooltipProps) {
  return (
    <AntTooltip title={text} placement={placement || 'bottomLeft'} arrow={false}>
      {children}
    </AntTooltip>
  );
}
