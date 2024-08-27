import { FormProvider, useForm } from 'react-hook-form';

import AccountForm from './components/Form/AccountForm';
import AddOnForm from './components/Form/AddOnForm';
import { Button } from './components/Button';
import CountStep from './components/StepComponent';
import { DevTool } from '@hookform/devtools';
import { FormEvent } from 'react';
import LastForm from './components/Form/LastForm';
import PlanForm from './components/Form/PlanForm';
import useMultiStepForm from './hooks/useMultiStepForm';

type FormValues = {
  name: string;
  email: string;
  phone: string;
  plan: {
    name: string;
    price: number;
  };
  addOns: string[];
};

function App() {
  const methods = useForm<FormValues>({
    defaultValues: { name: '', email: '', phone: '', plan: { name: '', price: 0 }, addOns: [] }
  });
  const { currentStepIndex, step, next, back, goTo, isFirstStep, isLastStep } = useMultiStepForm([
    <AccountForm />,
    <PlanForm />,
    <AddOnForm />,
    <LastForm />
  ]);
  //
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const values = methods.getValues();
    console.log(currentStepIndex + 1, values);
    next();
  };

  return (
    <>
      <FormProvider {...methods}>
        <DevTool control={methods.control} />
        <div className='relative h-screen w-full bg-light-gray font-ubuntu transition-all'>
          <div className='absolute h-1/4 w-full bg-sidebar-mobile bg-cover bg-no-repeat'></div>
          <form onSubmit={onSubmit} className='relative flex h-full w-full flex-col items-center px-4'>
            {/* count step */}
            <div className='mb-8 mt-8 flex w-full justify-center gap-4 font-semibold text-white'>
              <CountStep currentStep={currentStepIndex} number={1} />
              <CountStep currentStep={currentStepIndex} number={2} />
              <CountStep currentStep={currentStepIndex} number={3} />
              <CountStep currentStep={currentStepIndex} number={4} />
            </div>
            {/* wrapper */}
            <div className='flex flex-col gap-4 rounded-md bg-alabaster p-6'>{step}</div>
            {/*  */}
            <div className='absolute bottom-0 flex w-full justify-between bg-white p-4'>
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
      </FormProvider>
    </>
  );
}

export default App;
