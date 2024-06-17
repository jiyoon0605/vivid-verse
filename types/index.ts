import { ChangeEventHandler, MouseEventHandler, SVGProps } from 'react';

import { Locale } from '@/i18n-config';

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type Size = 'sm' | 'md' | 'lg';

export interface ButtonProps {
  variant?: 'solid' | 'bordered' | 'ghost' | 'shadow';
  isLoading?: boolean;
  isDisabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  size?: Size;
  label: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export interface TextInputProps {
  label?: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  isDisabled?: boolean;
  isLoading?: boolean;
  size?: Size;
  maxLength?: number;
}

export interface DefaultPageProps {
  params: {
    lang: Locale;
  };
}
