import { type VariantProps } from 'class-variance-authority';
import { InputHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';
import { inputVariants } from '../Input/inputVariants';

type InputComponent = InputHTMLAttributes<HTMLInputElement>;
type InputVariants = VariantProps<typeof inputVariants> & InputComponent & { 'data-test-id'?: string };

export const Input = ({ intent, className, 'data-test-id': dataTestId, placeholder }: InputVariants) => {
  return (
    <input
      className={twMerge(inputVariants({ intent, className }))}
      placeholder={placeholder}
      data-test-id={dataTestId}
    />
  );
};

export const InputLabel = ({ label }: { label: string }) => {
  return <p className='text-sm'>{label}</p>;
};

export const InputErrorMessage = ({ message }: { message: string }) => {
  return <span className='pr-2 text-end text-xs text-strawberry-red'>{message}</span>;
};
