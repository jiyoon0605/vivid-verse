import { ChangeEventHandler, MouseEventHandler, SVGProps } from 'react';

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
  children: string;
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
    locale: Locale;
  };
}

export type Locale = 'en' | 'ko' | 'ja' | 'zh';

export type SenseResult =
  | 'INIT'
  | 'VISION'
  | 'TOUCH'
  | 'SMELL'
  | 'HEARING'
  | 'TASTE'
  | 'NOT_SENSE'
  | 'OVER_LIMIT';

export interface Code<T> {
  value: T;
  label: string;
}

export type SentenceConvertResponse = {
  [key in SenseResult]: string;
};
