import { cva } from 'class-variance-authority';

export const inputVariants = cva('rounded-md border border-cool-gray p-2 pl-4 placeholder:text-sm', {
  variants: {
    intent: {
      primary: '',
      secondary: ''
    }
  },
  defaultVariants: {
    intent: 'primary'
  }
});
