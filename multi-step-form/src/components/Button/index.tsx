import { type VariantProps } from 'class-variance-authority';
import { ButtonHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';
import { buttonVariants } from './buttonVariants';

type ButtonComponent = Pick<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'disabled' | 'onClick' | 'children' | 'className' | 'type'
>;

type ButtonVariants = VariantProps<typeof buttonVariants> & ButtonComponent & { 'data-test-id'?: string };

export const Button = ({ children, intent, className, size, 'data-test-id': dataTestId, ...props }: ButtonVariants) => {
  return (
    <button className={twMerge(buttonVariants({ intent, size, className }))} data-test-id={dataTestId} {...props}>
      {children}
    </button>
  );
};
