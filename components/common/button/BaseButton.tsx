import React from 'react';
import { Button } from '@nextui-org/button';
import { ButtonProps } from '@/types';

export const BaseButton = ({
                             label,
                             type = 'button',
                             variant = 'solid',
                             isLoading = false,
                             isDisabled = false,
                             onClick,
                           }: ButtonProps) => {
  return (
    <Button color={'primary'}
            radius="md"
            auto
            variant={variant}
            isLoading={isLoading}
            isDisabled={isDisabled}
            type={type}
            onClick={onClick}
    >
      {label}
    </Button>
  );
};
