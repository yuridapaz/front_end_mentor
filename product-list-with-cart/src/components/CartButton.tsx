// components/button.ts
import { VariantProps, cva } from 'class-variance-authority';

import { ButtonHTMLAttributes } from 'react';

const buttonVariants = cva(['font-semibold', 'border', 'rounded'], {
  variants: {
    intent: {
      primary: ['bg-blue-500', 'text-white', 'border-transparent', 'hover:bg-blue-600'],

      secondary: ['bg-white', 'text-gray-800', 'border-gray-400', 'hover:bg-gray-100'],
    },
    size: {
      small: ['text-sm', 'py-1', 'px-2'],
      medium: ['text-base', 'py-2', 'px-4'],
    },
  },
  compoundVariants: [
    {
      intent: 'primary',
      size: 'medium',
      class: 'uppercase',
    },
  ],
  defaultVariants: {
    intent: 'primary',
    size: 'medium',
  },
});

type ButtonVariants = VariantProps<typeof buttonVariants> & ButtonHTMLAttributes<HTMLButtonElement>;

export const CartButton = ({ children, intent, className, size, ...props }: ButtonVariants) => {
  return (
    <button className={buttonVariants({ intent, size, className })} {...props}>
      {children}
    </button>
  );
};
