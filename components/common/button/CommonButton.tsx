import React, { MouseEventHandler } from 'react';
import { Button } from '@nextui-org/button';

interface ButtonProps {
  variant?: 'solid' | 'bordered' | 'ghost' | 'shadow';
  isLoading?: boolean;
  isDisabled?: boolean;
  label: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

/**
 * Primary UI component for user interaction
 */
export const CommonButton = ({
                               label,
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
            onClick={onClick}
    >
      {label}
    </Button>
  );
};
