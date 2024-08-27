import Heading from '../Heading';
import { IoIosCheckmark } from 'react-icons/io';

const AddOnForm = () => {
  return (
    <>
      <Heading title='Pick add-ons' description='Add-ons help enhance your gaming experience.' />
      <div>
        <ul className='flex flex-col gap-4'>
          <li className='relative'>
            <input type='checkbox' name='option-1' id='option-1' className='peer sr-only' />
            <label
              htmlFor='option-1'
              className='peer-checked:signal flex cursor-pointer items-center rounded-md border border-light-gray p-3 hover:border-purplish-blue peer-checked:border-purplish-blue peer-checked:bg-magnolia peer-checked:[&>span]:border-purplish-blue peer-checked:[&>span]:bg-purplish-blue peer-checked:[&>span]:text-white'>
              <div className='ml-10'>
                <p className='text-sm font-medium text-marine-blue'>Online service</p>
                <p className='text-xs text-cool-gray'>Access to multiplayer games</p>
              </div>
              <p className='ml-auto text-xs text-purplish-blue'>+$1/mo</p>
              <span className='absolute left-4 top-1/2 -translate-y-1/2 rounded-md border border-light-gray text-transparent'>
                <IoIosCheckmark className='h-5 w-5 cursor-pointer' />
              </span>
            </label>
          </li>
          <li className='relative'>
            <input type='checkbox' name='option-2' id='option-2' className='peer sr-only' />
            <label
              htmlFor='option-2'
              className='flex cursor-pointer items-center rounded-md border border-light-gray p-3 hover:border-purplish-blue peer-checked:border-purplish-blue peer-checked:bg-magnolia peer-checked:[&>span]:border-purplish-blue peer-checked:[&>span]:bg-purplish-blue peer-checked:[&>span]:text-white'>
              <div className='ml-10'>
                <p className='text-sm font-medium text-marine-blue'>Larger storage</p>
                <p className='text-xs text-cool-gray'>Extra 1TB of cloud save</p>
              </div>
              <p className='ml-auto text-xs text-purplish-blue'>+$2/mo</p>
              <span className='absolute left-4 top-1/2 -translate-y-1/2 rounded-md border border-light-gray text-transparent'>
                <IoIosCheckmark className='h-5 w-5' />
              </span>
            </label>
          </li>
          <li className='relative'>
            <input type='checkbox' name='option-3' id='option-3' className='peer sr-only' />
            <label
              htmlFor='option-3'
              className='peer-checked:signal flex cursor-pointer items-center rounded-md border border-light-gray p-3 hover:border-purplish-blue peer-checked:border-purplish-blue peer-checked:bg-magnolia peer-checked:[&>span]:border-purplish-blue peer-checked:[&>span]:bg-purplish-blue peer-checked:[&>span]:text-white'>
              <div className='ml-10'>
                <p className='text-sm font-medium text-marine-blue'>Customizable profile</p>
                <p className='text-xs text-cool-gray'>Custom theme on your profile</p>
              </div>
              <p className='ml-auto text-xs text-purplish-blue'>+$2/mo</p>
              <span className='absolute left-4 top-1/2 -translate-y-1/2 rounded-md border border-light-gray text-transparent'>
                <IoIosCheckmark className='h-5 w-5 cursor-pointer' />
              </span>
            </label>
          </li>
        </ul>
      </div>
    </>
  );
};

export default AddOnForm;
