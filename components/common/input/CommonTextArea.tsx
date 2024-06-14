import { Textarea } from '@nextui-org/input';
import { TextInputProps } from '@/types';
import { ChangeEvent } from 'react';

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
        isDisabled={props.isDisabled || props.isLoading}
        fullWidth
        maxLength={props.maxLength}
        labelPlacement={'outside'}
        className={`
                w-full
                h-full
                [&>div[data-slot='input-wrapper']]:border-1
                [&>div[data-slot='input-wrapper']]:border-default-300
                [&>div[data-slot='input-wrapper']]:text-text-${props.isDisabled ? 200 : 100}
              `}
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
