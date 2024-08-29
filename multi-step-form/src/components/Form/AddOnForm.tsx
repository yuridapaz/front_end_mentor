import Heading from '../Heading';
import { IoIosCheckmark } from 'react-icons/io';
import { useFormContext } from 'react-hook-form';

const AddOnForm = () => {
  const { register, getValues } = useFormContext();
  const isYearly = getValues('isYearly');
  const addOns = [
    {
      title: 'Online service',
      description: 'Access to multiplayer games',
      price: isYearly ? 10 : 1,
      type: isYearly ? 'yearly' : 'monthly'
    },
    {
      title: 'Larger storage',
      description: 'Extra 1TB of cloud save',
      price: isYearly ? 20 : 2,
      type: isYearly ? 'yearly' : 'monthly'
    },
    {
      title: 'Customizable profile',
      description: 'Custom theme on your profile',
      price: isYearly ? 20 : 2,
      type: isYearly ? 'yearly' : 'monthly'
    }
  ];

  const AddOnItem = ({ addOn, isYearly }: { addOn: (typeof addOns)[number]; isYearly: boolean }) => {
    return (
      <li className='relative'>
        <input
          type='checkbox'
          value={JSON.stringify(addOn)}
          id={addOn.title}
          className='peer sr-only'
          {...register('addOns')}
        />
        <label
          htmlFor={addOn.title}
          className='peer-checked:signal flex cursor-pointer items-center rounded-md border border-light-gray p-3 hover:border-purplish-blue peer-checked:border-purplish-blue peer-checked:bg-magnolia peer-checked:[&>span]:border-purplish-blue peer-checked:[&>span]:bg-purplish-blue peer-checked:[&>span]:text-white'>
          <div className='ml-10'>
            <p className='text-sm font-medium text-marine-blue'>{addOn.title}</p>
            <p className='text-xs text-cool-gray'>{addOn.description}</p>
          </div>
          <p className='ml-auto text-xs text-purplish-blue'>{isYearly ? `$${addOn.price}/yr` : `$${addOn.price}/mo`}</p>
          <span className='absolute left-4 top-1/2 -translate-y-1/2 rounded-md border border-light-gray text-transparent'>
            <IoIosCheckmark className='h-5 w-5 cursor-pointer' />
          </span>
        </label>
      </li>
    );
  };

  return (
    <>
      <Heading title='Pick add-ons' description='Add-ons help enhance your gaming experience.' />
      <div>
        <ul className='flex flex-col gap-4'>
          {addOns.map((addOn) => (
            <AddOnItem key={addOn.title} addOn={addOn} isYearly={isYearly} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default AddOnForm;
