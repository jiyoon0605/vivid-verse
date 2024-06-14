import { MouseEventHandler, SVGProps } from 'react';

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export interface ButtonProps {
  variant?: 'solid' | 'bordered' | 'ghost' | 'shadow';
  isLoading?: boolean;
  isDisabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  label: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  
}