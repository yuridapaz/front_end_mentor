import AccountForm from './AccountForm';
import AddOnForm from './AddOnForm';
import { Button } from '../Button';
import Heading from '../Heading';
import PlanForm from './PlanForm';
import React from 'react';
import { useFormContext } from 'react-hook-form';
import useMultiStepForm from '../../hooks/useMultiStepForm';

const LastForm = ({ goTo }: { goTo: (number: number) => void }) => {
  const { getValues } = useFormContext();
  const { plan: planValue, addOns, isYearly } = getValues();
  const { name, type, price } = planValue ? JSON.parse(planValue) : { name: 'No plan', type: 'Error', price: 0 };

  const checkOutAddOn = ({ title, price }: { title: string; price: number }) => (
    <div className='flex items-center justify-between text-sm text-cool-gray'>
      <p>{title}</p>
      <p className='font-thin text-marine-blue'>
        +${price}/{type === 'yearly' ? 'yr' : 'mo'}
      </p>
    </div>
  );
  const finalAmount = price + addOns.reduce((acc: unknown, addOn: string) => acc + JSON.parse(addOn).price, 0);

  return (
    <>
      <Heading title='Finishing up' description='Double-check everything looks OK before confirming.' />
      <div className='flex flex-col gap-2'>
        <div className='flex flex-col rounded-md bg-magnolia p-4'>
          <div className='flex items-center justify-between'>
            <div className='flex flex-col'>
              <p className='font-medium capitalize text-marine-blue'>
                {name} ( {type} )
              </p>
              <button className='w-fit cursor-pointer p-0 text-sm text-cool-gray underline' onClick={() => goTo(1)}>
                Change
              </button>
            </div>
            <p className='text-sm font-medium text-marine-blue'>
              +${price}/{type === 'yearly' ? 'yr' : 'mo'}
            </p>
          </div>
          <div className='my-3 border-b'></div>
          <div className='flex flex-col gap-2'>
            {addOns.map((addOn: string, i: number) => {
              const addOnObj = JSON.parse(addOn);
              return <div key={i}>{checkOutAddOn(addOnObj)}</div>;
            })}
          </div>
        </div>
        <div className='p-4'>
          <div className='flex items-center justify-between text-sm text-cool-gray'>
            <p className='font-thin'>Total (per month)</p>
            <p className='text-base font-medium text-purplish-blue'>
              ${isYearly ? (finalAmount / 12).toFixed(2) : finalAmount}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LastForm;
