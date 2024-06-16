import { Textarea } from '@nextui-org/input';
import { ChangeEvent } from 'react';

import { TextInputProps } from '@/types';

export default function CommonTextArea({ onChange, ...props }: TextInputProps) {
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (props.maxLength && e.target.value.length >= props.maxLength) {
      return;
    }
    onChange(e);
  };

  return (
    <div>
      <Textarea
        {...props}
        fullWidth
        className={`
                w-full
                h-full
                [&>div[data-slot='input-wrapper']]:border-1
                [&>div[data-slot='input-wrapper']]:border-default-300
                [&>div[data-slot='input-wrapper']]:text-text-${props.isDisabled ? 200 : 100}
                `}
        isDisabled={props.isDisabled || props.isLoading}
        labelPlacement={'outside'}
        maxLength={props.maxLength}
        onChange={onChangeHandler}
      />
      {props.maxLength && (
        <p className="text-right text-xs text-background-300">
          {props.value.length}/{props.maxLength}
        </p>
      )}
    </div>
  );
}
