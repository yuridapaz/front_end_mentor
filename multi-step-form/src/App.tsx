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

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    next();
  };

  return (
    <>
      <FormProvider {...methods}>
        <DevTool control={methods.control} />
        <div className='relative flex h-screen w-full justify-center bg-magnolia font-ubuntu transition-all lg:items-center'>
          <div className='absolute h-1/4 w-full bg-sidebar-mobile bg-cover bg-no-repeat lg:invisible'></div>
          {/* <div className='flex items-center justify-center'> */}
          <form
            onSubmit={methods.handleSubmit(onSubmit)}
            className='relative flex w-full flex-col items-center px-4 sm:max-w-[600px] lg:bg-alabaster'>
            {/* count step */}

            <div className='relative mb-8 mt-8 flex w-full justify-center gap-4 font-semibold text-white md:mt-36'>
              {/* <div className='absolute bottom-0 left-0 right-0 top-0 bg-sidebar-mobile bg-cover bg-no-repeat'></div> */}
              <CountStep currentStep={currentStepIndex} number={1} />
              <CountStep currentStep={currentStepIndex} number={2} />
              <CountStep currentStep={currentStepIndex} number={3} />
              <CountStep currentStep={currentStepIndex} number={4} />
            </div>
            {/* wrapper */}
            <div className=''>
              <div className='flex w-full flex-col gap-4 rounded-md bg-alabaster p-6 md:rounded-b-none'>{step}</div>
              {/*  */}
              <div className='absolute bottom-0 flex w-full justify-between rounded-b-md bg-white p-4'>
                {!isFirstStep && (
                  <Button intent='secondary' className='mr-auto' onClick={back} type='button'>
                    Back
                  </Button>
                )}
                <Button intent='primary' className={`ml-auto ${isLastStep && 'px-8'}`} type='submit'>
                  {isLastStep ? 'Finish' : 'Next Step'}
                </Button>
              </div>
            </div>
          </form>
        </div>
        {/* </div> */}
      </FormProvider>
    </>
  );
}

export default App;
