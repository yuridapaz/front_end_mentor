import React, { useState } from 'react';

import AdvancedLogo from '../../assets/images/icon-advanced.svg';
import ArcadeLogo from '../../assets/images/icon-arcade.svg';
import Heading from '../Heading';
import { InputErrorMessage } from '../Input';
import ProLogo from '../../assets/images/icon-pro.svg';
import { useFormContext } from 'react-hook-form';
import useMultiStepForm from '../../hooks/useMultiStepForm';

const PlanForm = () => {
  const {
    register,
    resetField,
    formState: { errors },
    getValues,
    setValue
  } = useFormContext();
  const isYearly = getValues('isYearly');
  const checkHandler = () => {
    setValue('isYearly', !isYearly);
    resetField('plan');
  };

  const plan = {
    arcade: {
      name: 'Arcade',
      type: isYearly ? 'yearly' : 'monthly',
      price: isYearly ? 90 : 9
    },
    advanced: {
      name: 'Advanced',
      type: isYearly ? 'yearly' : 'monthly',
      price: isYearly ? 120 : 12
    },
    pro: {
      name: 'Pro',
      type: isYearly ? 'yearly' : 'monthly',
      price: isYearly ? 150 : 15
    }
  };

  return (
    <>
      <Heading title='Select your plan' description='You have the option of monthly or yearly billing' />
      {errors.plan && (
        <InputErrorMessage message='Choose one option' className='pl-2 text-center text-lg text-strawberry-red/80' />
      )}
      <div className='flex flex-col gap-4'>
        <div className=''>
          <input
            type='radio'
            id='radio-1'
            className='peer sr-only'
            value={JSON.stringify(plan.arcade)}
            {...register('plan', {
              required: true
            })}
          />
          <label
            htmlFor='radio-1'
            className='flex cursor-pointer items-center gap-4 rounded-md border border-light-gray p-4 transition-all hover:border-cool-gray peer-checked:border-purplish-blue peer-checked:bg-magnolia'>
            <img src={ArcadeLogo} alt='' />
            <div className='flex flex-col gap-0.5'>
              <p className='font-semibold text-marine-blue'>Arcade</p>
              <p className='text-sm text-cool-gray'>{`$${plan.arcade.price}${isYearly ? '/yr' : '/mo'}`}</p>
              {isYearly && <span className='text-xs text-marine-blue'>2 months free</span>}
            </div>
          </label>
        </div>
        <div className=''>
          <input
            type='radio'
            id='radio-2'
            className='peer sr-only'
            value={JSON.stringify(plan.advanced)}
            {...register('plan', {
              required: 'Choose one option'
            })}
          />

          <label
            htmlFor='radio-2'
            className='flex cursor-pointer items-center gap-4 rounded-md border border-light-gray p-4 transition-all hover:border-cool-gray peer-checked:border-purplish-blue peer-checked:bg-magnolia'>
            <img src={AdvancedLogo} alt='' />
            <div className='flex flex-col gap-0.5'>
              <p className='font-semibold text-marine-blue'>Advanced</p>
              <p className='text-sm text-cool-gray'>{`$${plan.advanced.price}${isYearly ? '/yr' : '/mo'}`}</p>
              {isYearly && <span className='text-xs text-marine-blue'>2 months free</span>}
            </div>
          </label>
        </div>
        <div className=''>
          <input
            type='radio'
            id='radio-3'
            className='peer sr-only'
            value={JSON.stringify(plan.pro)}
            {...register('plan', {
              required: 'Choose one option'
            })}
          />
          <label
            htmlFor='radio-3'
            className='flex cursor-pointer items-center gap-4 rounded-md border border-light-gray p-4 transition-all hover:border-cool-gray peer-checked:border-purplish-blue peer-checked:bg-magnolia'>
            <img src={ProLogo} alt='' />
            <div className='flex flex-col gap-0.5'>
              <p className='font-semibold text-marine-blue'>Pro</p>
              <p className='text-sm text-cool-gray'>{`$${plan.pro.price}${isYearly ? '/yr' : '/mo'}`}</p>
              {isYearly && <span className='text-xs text-marine-blue'>2 months free</span>}
            </div>
          </label>
        </div>
        <div className='flex h-20 items-center justify-center gap-3 rounded-md bg-magnolia'>
          <label className='relative inline-flex cursor-pointer items-center'>
            <input type='checkbox' value='' className='peer sr-only' onChange={checkHandler} checked={isYearly} />
            <div className="peer relative h-5 w-10 rounded-full bg-marine-blue after:absolute after:start-[4px] after:top-[4px] after:h-3 after:w-3 after:rounded-full after:bg-alabaster after:transition-all after:content-[''] peer-checked:after:translate-x-5 rtl:peer-checked:after:-translate-x-5"></div>
            <p className='absolute -left-20 font-medium text-marine-blue transition-all peer-checked:text-cool-gray'>
              Monthly
            </p>
            <p className='absolute -right-16 font-medium text-cool-gray transition-all peer-checked:text-marine-blue'>
              Yearly
            </p>
          </label>
        </div>
      </div>
    </>
  );
};

export default PlanForm;
