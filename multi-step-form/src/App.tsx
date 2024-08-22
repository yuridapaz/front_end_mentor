import AccountForm from './components/Form/AccountForm';
import AddOnForm from './components/Form/AddOnForm';
import { Button } from './components/Button';
import CountStep from './components/StepComponent';
import LastForm from './components/Form/LastForm';
import PlanForm from './components/Form/PlanForm';
import useMultiStepForm from './hooks/useMultiStepForm';

function App() {
  const { currentStepIndex, step, next, back, goTo, isFirstStep } = useMultiStepForm([
    <AccountForm />,
    <PlanForm />,
    <AddOnForm />,
    <LastForm />
  ]);

  return (
    <>
      <div className='relative h-screen w-full bg-light-gray font-ubuntu transition-all'>
        <div className='absolute h-1/4 w-full bg-sidebar-mobile bg-cover bg-no-repeat'></div>
        <div className='relative flex h-full w-full flex-col items-center px-4'>
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
              <Button intent='secondary' className='mr-auto' onClick={back}>
                Next Step
              </Button>
            )}
            <Button intent='primary' className='ml-auto' onClick={next}>
              Next Step
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
