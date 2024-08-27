// type InputComponent = InputHTMLAttributes<HTMLInputElement>;
// type InputVariants = VariantProps<typeof inputVariants> & InputComponent & { 'data-test-id'?: string };
// export const Input = ({ intent, className, name, 'data-test-id': dataTestId, ...props }: InputVariants) => {
//   const { register } = useFormContext();
//   return (
//     <input
//       className={twMerge(inputVariants({ intent, className }))}
//       data-test-id={dataTestId}
//       {...register(name, { required: true })}
//       {...props}
//     />
//   );
// };

export const InputLabel = ({ label }: { label: string }) => {
  return <p className='text-sm text-marine-blue/90'>{label}</p>;
};

export const InputErrorMessage = ({ message }: { message: string }) => {
  return <span className='pr-2 text-end text-xs text-strawberry-red/80'>{message}</span>;
};
