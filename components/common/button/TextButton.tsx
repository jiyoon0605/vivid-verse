import { Button } from '@nextui-org/button';
import { ButtonProps } from '@/types';
import React from 'react';

export const TextButton = ({
                             label,
                             type = 'button',
                             isLoading = false,
                             isDisabled = false,
                             onClick,
                           }: Omit<ButtonProps, 'variant'>) => {
  return (
    <Button auto
            className={'bg-transparent text-text-100 hover:text-primary underline underline-offset-4'}
            isLoading={isLoading}
            isDisabled={isDisabled}
            type={type}
            onClick={onClick}
    >
      {label}
    </Button>
  );
};
