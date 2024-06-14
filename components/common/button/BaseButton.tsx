import React from 'react';
import { Button } from '@nextui-org/button';
import { ButtonProps } from '@/types';

export const BaseButton = ({
  label,
  type = 'button',
  size = 'md',
  variant = 'solid',
  isLoading = false,
  isDisabled = false,
  onClick,
}: ButtonProps) => {
  return (
    <Button
      color={'primary'}
      className={`font-bold`}
      radius="md"
      size={size}
      variant={variant}
      isLoading={isLoading}
      isDisabled={isDisabled}
      type={type}
      onClick={onClick}
    >
      {!isLoading && label}
    </Button>
  );
};
