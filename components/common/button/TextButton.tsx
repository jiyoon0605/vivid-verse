import { Button } from '@nextui-org/button';
import { ButtonProps } from '@/types';
import React from 'react';

interface TextButtonProps extends Omit<ButtonProps, 'variant'> {}

export const TextButton = ({ label, type = 'button', size = 'md', isLoading = false, isDisabled = false, onClick }: TextButtonProps) => {
  return (
    <Button
      className={'bg-transparent text-text-100 hover:text-primary underline underline-offset-4'}
      size={size}
      isLoading={isLoading}
      isDisabled={isDisabled}
      type={type}
      onClick={onClick}
    >
      {!isLoading && label}
    </Button>
  );
};
