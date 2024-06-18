import { Button } from '@nextui-org/button';
import React from 'react';

import { ButtonProps } from '@/types';

interface TextButtonProps extends Omit<ButtonProps, 'variant'> {
  isSelected?: boolean;
}

export const TextButton = ({
  children,
  type = 'button',
  size = 'md',
  isLoading = false,
  isDisabled = false,
  isSelected = false,
  onClick,
}: TextButtonProps) => {
  return (
    <Button
      className={`bg-transparent 
      text-text-100 
      hover:text-primary 
      underline 
      underline-offset-4 
      text-${size} 
      ${isSelected ? 'font-semibold text-primary' : 'font-medium'}`}
      color={isSelected ? 'primary' : 'default'}
      isDisabled={isDisabled || isSelected}
      isLoading={isLoading}
      size={size}
      type={type}
      onClick={onClick}
    >
      {!isLoading && children}
    </Button>
  );
};
