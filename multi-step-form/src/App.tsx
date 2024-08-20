import ArcadeLogo from './assets/images/icon-arcade.svg';
import { Button } from './components/Button';
import CountStep from './components/StepComponent';
import { IoIosCheckmark } from 'react-icons/io';

function App() {
  return (
    <>
      <div className='relative h-screen w-full bg-light-gray font-ubuntu transition-all'>
        {/* bg */}
        <div className='absolute h-1/4 w-full bg-sidebar-mobile bg-cover bg-no-repeat'></div>
        <div className='relative flex h-full w-full flex-col items-center px-4'>
          {/* steps */}
          <div className='mb-8 mt-8 flex w-full justify-center gap-4 font-semibold text-white'>
            <CountStep complete={true} number={1} />
            <CountStep complete={true} number={2} />
            <CountStep complete={false} number={3} />
            <CountStep complete={false} number={4} />
          </div>
          {/* main card */}
          <div className='flex flex-col gap-4 rounded-md bg-alabaster p-6'>
            <div className='flex flex-col gap-2'>
              <p className='text-2xl font-semibold text-marine-blue'>Pick add-ons</p>
              <span className='text-md font-light text-cool-gray'>Add-ons help enhance your gaming experience.</span>
            </div>
            {/*  */}

            {/*  */}
            {/* first part  */}
            {/*  */}
            {/* <div className='flex flex-col gap-4'>
              <div className='flex flex-col'>
                <InputLabel label='Name' />
                <Input placeholder='e.g. Stephen King' />
                <InputErrorMessage message='input error message' />
              </div>
              <div className='flex flex-col'>
                <InputLabel label='Name' />
                <Input placeholder='e.g. Stephen King' />
                <InputErrorMessage message='input error message' />
              </div>
              <div className='flex flex-col'>
                <InputLabel label='Name' />
                <Input placeholder='e.g. Stephen King' />
                <InputErrorMessage message='input error message' />
              </div>
            </div> */}
            {/*  */}
            {/* select your plan */}
            {/*  */}
            {/* <div className='flex flex-col gap-4'>
              <div className=''>
                <input type='radio' name='radio' id='radio-1' className='peer sr-only' />
                <label
                  htmlFor='radio-1'
                  className='flex cursor-pointer items-center gap-4 rounded-md border border-light-gray p-4 transition-all hover:border-cool-gray peer-checked:border-purplish-blue peer-checked:bg-magnolia'>
                  <img src={ArcadeLogo} alt='' />
                  <div className='flex flex-col gap-0.5'>
                    <p className='font-semibold text-marine-blue'>Arcade</p>
                    <p className='text-sm text-cool-gray'>$9/mo</p>
                    <span className='text-xs text-marine-blue'>2 months free</span>
                  </div>
                </label>
              </div>
              <div className=''>
                <input type='radio' name='radio' id='radio-2' className='peer sr-only' />
                <label
                  htmlFor='radio-2'
                  className='flex cursor-pointer items-center gap-4 rounded-md border border-light-gray p-4 transition-all hover:border-cool-gray peer-checked:border-purplish-blue peer-checked:bg-magnolia'>
                  <img src={ArcadeLogo} alt='' />
                  <div className='flex flex-col gap-0.5'>
                    <p className='font-semibold text-marine-blue'>Arcade</p>
                    <p className='text-sm text-cool-gray'>$9/mo</p>
                    <span className='text-xs text-marine-blue'>2 months free</span>
                  </div>
                </label>
              </div>
              <div className=''>
                <input type='radio' name='radio' id='radio-3' className='peer sr-only' />
                <label
                  htmlFor='radio-3'
                  className='flex cursor-pointer items-center gap-4 rounded-md border border-light-gray p-4 transition-all hover:border-cool-gray peer-checked:border-purplish-blue peer-checked:bg-magnolia'>
                  <img src={ArcadeLogo} alt='' />
                  <div className='flex flex-col gap-0.5'>
                    <p className='font-semibold text-marine-blue'>Arcade</p>
                    <p className='text-sm text-cool-gray'>$9/mo</p>
                    <span className='text-xs text-marine-blue'>2 months free</span>
                  </div>
                </label>
              </div>
              <div className='flex items-center justify-center gap-3 rounded-md bg-magnolia p-4'>
                <label className='relative inline-flex cursor-pointer items-center'>
                  <input type='checkbox' value='' className='peer sr-only' />
                  <div className="peer relative h-5 w-10 rounded-full bg-marine-blue after:absolute after:start-[4px] after:top-[4px] after:h-3 after:w-3 after:rounded-full after:bg-alabaster after:transition-all after:content-[''] peer-checked:after:translate-x-5 rtl:peer-checked:after:-translate-x-5"></div>
                  <p className='absolute -left-20 font-medium text-marine-blue transition-all peer-checked:text-cool-gray'>
                    Monthly
                  </p>
                  <p className='absolute -right-16 font-medium text-cool-gray transition-all peer-checked:text-marine-blue'>
                    Yearly
                  </p>
                </label>
              </div>
            </div> */}
            {/*  */}
            {/* third part */}
            {/* <div>
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
                      <p className='text-sm font-medium text-marine-blue'>Online service</p>
                      <p className='text-xs text-cool-gray'>Access to multiplayer games</p>
                    </div>
                    <p className='ml-auto text-xs text-purplish-blue'>+$1/mo</p>
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
                      <p className='text-sm font-medium text-marine-blue'>Online service</p>
                      <p className='text-xs text-cool-gray'>Access to multiplayer games</p>
                    </div>
                    <p className='ml-auto text-xs text-purplish-blue'>+$1/mo</p>
                    <span className='absolute left-4 top-1/2 -translate-y-1/2 rounded-md border border-light-gray text-transparent'>
                      <IoIosCheckmark className='h-5 w-5 cursor-pointer' />
                    </span>
                  </label>
                </li>
              </ul>
            </div> */}
            {/*  */}
            {/* fourth part */}
            {/* <div className='flex flex-col gap-2'>
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
            </div> */}
            {/*  */}
          </div>
          <div className='absolute bottom-0 flex w-full justify-end bg-white p-4'>
            <Button intent='primary' className=''>
              Next Step
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
