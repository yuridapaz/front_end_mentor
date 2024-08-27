import { InputErrorMessage, InputLabel } from '../Input';

import Heading from '../Heading';
import { useFormContext } from 'react-hook-form';

const AccountForm = () => {
  const { register } = useFormContext();

  return (
    <>
      <Heading title='Personal info' description='Please provide your name, email address, and phone number.' />
      <div className='flex flex-col gap-4'>
        <div className='flex flex-col'>
          <InputLabel label='Name' />
          <input
            className='rounded-md border border-cool-gray p-2 pl-4 placeholder:text-sm placeholder:font-medium'
            type='text'
            placeholder='e.g. Stephen King'
            {...register('name')}
          />
          <InputErrorMessage message='input error message' />
        </div>
        <div className='flex flex-col'>
          <InputLabel label='Email Address' />
          <input
            className='rounded-md border border-cool-gray p-2 pl-4 placeholder:text-sm placeholder:font-medium'
            type='email'
            placeholder='e.g.stephenking@lorem.com'
            {...register('email')}
          />
          <InputErrorMessage message='input error message' />
        </div>
        <div className='flex flex-col'>
          <InputLabel label='Phone Number' />
          <input
            className='rounded-md border border-cool-gray p-2 pl-4 placeholder:text-sm placeholder:font-medium'
            type='tel'
            placeholder='e.g. +1 234 567 890'
            {...register('phone')}
          />
          <InputErrorMessage message='input error message' />
        </div>
      </div>
    </>
  );
};

export default AccountForm;
