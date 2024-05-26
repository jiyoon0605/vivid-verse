import { MouseEventHandler } from 'react';

interface BaseButtonProps {
  children: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

const colorMap = {
  default: 'bg-primary-100 active:bg-accent-200 text-bg-100',
  disabled: 'bg-bg-200 text-bg-300',
};
export default function BaseButton({ children, onClick, disabled = false }: BaseButtonProps) {
  return (
    <button
      className={`${colorMap[disabled ? 'disabled' : 'default']}
                    text-button rounded
                    px-[17px] py-[10px]`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
