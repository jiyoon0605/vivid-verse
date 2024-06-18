import React from 'react';
import { Button } from '@nextui-org/button';

import { ButtonProps } from '@/types';

export const BaseButton = ({
  children,
  type = 'button',
  size = 'md',
  variant = 'solid',
  isLoading = false,
  isDisabled = false,
  onClick,
}: ButtonProps) => {
  return (
    <Button
      className={`font-bold text-${size}`}
      color={'primary'}
      isDisabled={isDisabled}
      isLoading={isLoading}
      radius="md"
      size={size}
      type={type}
      variant={variant}
      onClick={onClick}
    >
      {!isLoading && children}
    </Button>
  );
};
