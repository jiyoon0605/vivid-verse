import { MouseEventHandler } from 'react';

interface TextButtonProps {
  children: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

export default function TextButton({ children, onClick, disabled = false }: TextButtonProps) {
  return (
    <button
      className={`text-lg underline underline-offset-4
                              ${disabled ? 'text-bg-300' : 'text-text-100 hover:text-primary-100 active:text-accent-200'}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
