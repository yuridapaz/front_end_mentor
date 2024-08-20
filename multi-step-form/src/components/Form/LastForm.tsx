import Heading from '../Heading';
import React from 'react';

const LastForm = () => {
  return (
    <>
      <Heading title='Pick add-ons' description='Add-ons help enhance your gaming experience.' />
      <div className='flex flex-col gap-2'>
        <div className='flex flex-col rounded-md bg-magnolia p-4'>
          <div className='flex items-center justify-between'>
            <div className='flex flex-col'>
              <p className='font-medium text-marine-blue'>Arcade (Monthly)</p>
              <span className='cursor-pointer text-sm text-cool-gray underline'>Change</span>
            </div>
            <p className='text-sm font-medium text-marine-blue'>$9/mo</p>
          </div>
          <div className='my-3 border-b'></div>
          <div className='flex flex-col gap-2'>
            <div className='flex items-center justify-between text-sm text-cool-gray'>
              <p>Online service</p>
              <p className='font-thin text-marine-blue'>+$1/mo</p>
            </div>
            <div className='flex items-center justify-between text-sm text-cool-gray'>
              <p className=''>Larger storage</p>
              <p className='font-thin text-marine-blue'>+$2/mo</p>
            </div>
          </div>
        </div>
        <div className='p-4'>
          <div className='flex items-center justify-between text-sm text-cool-gray'>
            <p className='font-thin'>Total (per month)</p>
            <p className='text-base font-medium text-purplish-blue'>+$12/mo</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LastForm;
