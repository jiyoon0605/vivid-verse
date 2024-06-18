import { RadioGroup, useRadio } from '@nextui-org/radio';
import { VisuallyHidden } from '@react-aria/visually-hidden';
import { UseRadioProps } from '@nextui-org/radio/dist/use-radio';
import { Chip } from '@nextui-org/chip';
import { ChangeEventHandler } from 'react';

interface ChipRadioGroupProps {
  children?: React.ReactNode;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

function RadioChip(props: UseRadioProps) {
  const {
    Component,
    children,
    isSelected,
    getBaseProps,
    getInputProps,
    getLabelProps,
    getControlProps,
  } = useRadio(props);

  const { onClick } = getControlProps();

  return (
    <Component {...getBaseProps()}>
      <VisuallyHidden>
        <input {...getInputProps()} />
      </VisuallyHidden>{' '}
      <Chip
        className={`cursor-pointer px-5 flex ${isSelected && 'bg-background-200 border border-background-300'}`}
        color={'secondary'}
        onClick={onClick}
      >
        <div>
          {children && (
            <span
              {...getLabelProps()}
              className={isSelected ? 'text-text-200' : 'text-background-100'}
            >
              {children}
            </span>
          )}
        </div>
      </Chip>
    </Component>
  );
}

export default function ChipRadioGroup({ children, onChange }: ChipRadioGroupProps) {
  return (
    <RadioGroup orientation="horizontal" onChange={onChange}>
      {children}
    </RadioGroup>
  );
}

ChipRadioGroup.Chip = RadioChip;
