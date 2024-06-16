import { Button } from '@nextui-org/button';
import React from 'react';

import { ButtonProps } from '@/types';

interface TextButtonProps extends Omit<ButtonProps, 'variant'> {}

export const TextButton = ({ label, type = 'button', size = 'md', isLoading = false, isDisabled = false, onClick }: TextButtonProps) => {
  return (
    <Button
      className={'bg-transparent text-text-100 hover:text-primary underline underline-offset-4'}
      isDisabled={isDisabled}
      isLoading={isLoading}
      size={size}
      type={type}
      onClick={onClick}
    >
      {!isLoading && label}
    </Button>
  );
};
