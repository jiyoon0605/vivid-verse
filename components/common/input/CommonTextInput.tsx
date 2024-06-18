import { Input } from '@nextui-org/input';
import { ChangeEvent } from 'react';

import { TextInputProps } from '@/types';

export default function CommonTextInput({ onChange, ...props }: TextInputProps) {
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (props.maxLength && e.target.value.length > props.maxLength) {
      return;
    }
    onChange(e);
  };

  return (
    <div>
      <Input
        {...props}
        fullWidth
        classNames={{
          inputWrapper: [
            'border-1',
            'border-default-300',
            'text-text-' + (props.isDisabled ? 200 : 100),
          ],
        }}
        endContent={
          <>
            {props.maxLength && (
              <p className="text-right text-xs text-background-300">
                {props.value.length}/{props.maxLength}
              </p>
            )}
          </>
        }
        isDisabled={props.isDisabled || props.isLoading}
        labelPlacement={'outside'}
        maxLength={props.maxLength}
        size={'lg'}
        variant={'flat'}
        onChange={onChangeHandler}
      />
    </div>
  );
}
