import { Textarea } from '@nextui-org/input';
import { TextInputProps } from '@/types';

export default function CommonTextArea(props: TextInputProps) {
  return (
    <Textarea
      {...props}
      fullWidth
      className={`
        bg-background-200
        border
        rounded-md
        ${props.isDisabled ? 'text-text-200' : 'text-text-100'}
        border-background-300
      `}
    />
  );
}
