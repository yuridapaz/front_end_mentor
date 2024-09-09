import { FormEvent, useEffect } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

import AccountForm from './components/Form/AccountForm';
import AddOnForm from './components/Form/AddOnForm';
import { Button } from './components/Button';
import CountStep from './components/StepComponent';
import { DevTool } from '@hookform/devtools';
import LastForm from './components/Form/LastForm';
import PlanForm from './components/Form/PlanForm';
import useMultiStepForm from './hooks/useMultiStepForm';

type FormValues = {
  name: string;
  email: string;
  phone: string;
  plan: string;
  addOns: string[];
  isYearly: boolean;
};

//TODO: Responsive design the form with Tailwind
//TODO: Update some names
//TODO: Typescript
//TODO: Const and Methods

function App() {
  const methods = useForm<FormValues>({
    defaultValues: { name: '', email: '', phone: '', plan: '', addOns: [], isYearly: false },
    mode: 'all'
  });
  const { currentStepIndex, step, next, back, isFirstStep, isLastStep, goTo } = useMultiStepForm([
    <AccountForm />,
    <PlanForm />,
    <AddOnForm />,
    <LastForm goTo={(number: number) => goTo(number)} />
  ]);

  const stepsObj: { [key: string]: string } = {
    1: 'Your info',
    2: 'Select plan',
    3: 'Add-on',
    4: 'Summary'
  };

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    next();
  };

  return (
    <>
      <FormProvider {...methods}>
        <DevTool control={methods.control} />
        <div className='relative flex min-h-screen w-full justify-center bg-magnolia font-ubuntu transition-all lg:items-center'>
          {/* background image */}
          <div className='absolute h-1/4 w-full bg-sidebar-mobile bg-cover bg-no-repeat md:h-1/3 lg:invisible'></div>
          <form
            onSubmit={methods.handleSubmit(onSubmit)}
            className='relative flex w-full flex-col items-center px-4 pb-24 sm:max-w-[600px] lg:max-w-5xl lg:grid-cols-2 lg:flex-row lg:items-center lg:gap-8 lg:rounded-lg lg:bg-slate-300 lg:p-8'>
            {/* count step  wrapper */}
            <div className='relative my-8 flex w-full justify-center gap-4 font-semibold text-white md:mt-28 md:justify-around lg:my-0 lg:w-[450px] lg:flex-col lg:justify-center lg:rounded-lg lg:bg-sidebar-desktop lg:p-8'>
              {Object.keys(stepsObj).map((key, index) => (
                <div className='flex flex-col items-center gap-3 lg:flex-row lg:gap-6 lg:p-2'>
                  <CountStep currentStep={currentStepIndex} number={Number(key)} />
                  <div className='flex flex-col'>
                    <p className='hidden font-thin md:inline-block'>Step {key}</p>
                    <p className='hidden lg:inline-block'>{stepsObj[key]}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* wrapper */}
            <div className='flex w-full flex-col gap-4 rounded-md bg-alabaster p-6 md:rounded-b-none lg:w-full'>
              {step}
            </div>
            {/* bottom buttons */}
            <div className='fixed bottom-0 left-0 right-0 flex justify-between rounded-b-md bg-white p-4'>
              {!isFirstStep && (
                <Button intent='secondary' className='mr-auto' onClick={back} type='button'>
                  Back
                </Button>
              )}
              <Button intent='primary' className={`ml-auto ${isLastStep && 'px-8'}`} type='submit'>
                {isLastStep ? 'Finish' : 'Next Step'}
              </Button>
            </div>
          </form>
        </div>
        {/* </div> */}
      </FormProvider>
    </>
  );
}

export default App;
