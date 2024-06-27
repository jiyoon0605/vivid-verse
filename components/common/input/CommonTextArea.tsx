import { Textarea } from '@nextui-org/input';
import { ChangeEvent } from 'react';

import { TextInputProps } from '@/types';

export default function CommonTextArea({ onChange, ...props }: TextInputProps) {
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (props.maxLength && e.target.value.length > props.maxLength) {
      return;
    }
    onChange(e);
  };

  return (
    <div>
      <Textarea
        {...props}
        fullWidth
        classNames={{
          label: 'w-full h-full',
          innerWrapper: ['flex', 'flex-col', 'min-h-full', 'flex', 'flex-col'],
          inputWrapper: [
            'border-1',
            'border-default-300',
            'text-text-' + (props.isDisabled ? 200 : 100),
            'min-h-full',
          ],
          input: ['flex-1'],
        }}
        endContent={
          <>
            {props.maxLength && (
              <p className="w-full text-right text-xs text-background-300">
                {props.value.length}/{props.maxLength}
              </p>
            )}
          </>
        }
        isDisabled={props.isDisabled || props.isLoading}
        labelPlacement={'outside'}
        maxLength={props.maxLength}
        onChange={onChangeHandler}
      />
    </div>
  );
}
