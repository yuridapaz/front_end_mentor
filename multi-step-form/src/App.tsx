import { Button } from './components/Button';
import CountStep from './components/StepComponent';

function App() {
  return (
    <>
      <div className='font-ubuntu relative h-screen w-full bg-light-gray'>
        {/* bg */}
        <div className='absolute h-1/4 w-full bg-sidebar-mobile bg-cover bg-no-repeat'></div>
        <div className='relative flex h-full w-full flex-col items-center px-6'>
          {/* steps */}
          <div className='mb-8 mt-8 flex w-full justify-center gap-4 font-semibold text-white'>
            <CountStep complete={true} number={1} />
            <CountStep complete={true} number={2} />
            <CountStep complete={false} number={3} />
            <CountStep complete={false} number={4} />
          </div>
          {/* main card */}
          <div className='flex flex-col gap-4 rounded-md bg-white p-6'>
            <div className='flex flex-col gap-2'>
              <p className='text-2xl font-semibold text-marine-blue'>Select your plan</p>
              <span className='text-md font-light text-cool-gray'>
                You have the option of monthly or yearly billing.
              </span>
            </div>
            <div>
              <div className=''>
                <input type='radio' name='radio' id='radio-1' className='hidden' />
                <label htmlFor='radio-1' className='flex cursor-pointer'>
                  Radio 1
                </label>
              </div>
              <div>
                <input type='radio' name='radio' id='radio-2' />
                <label htmlFor='radio-2'>Radio 2</label>
              </div>
              <div>
                <input type='radio' name='radio' id='radio-3' />
                <label htmlFor='radio-3'>Radio 3</label>
              </div>
            </div>
            {/* first part  */}
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
            {/* second part  */}
            <div className=''></div>
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
