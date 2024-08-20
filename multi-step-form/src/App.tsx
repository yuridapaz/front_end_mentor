import AccountForm from './components/Form/AccountForm';
import { Button } from './components/Button';
import CountStep from './components/StepComponent';
import useMultiStepForm from './hooks/useMultiStepForm';

function App() {
  const { currentStepIndex, step, next, back, goTo } = useMultiStepForm([<AccountForm />, <h1>Oi2</h1>, <h1>Oi3</h1>]);

  return (
    <>
      <div className='relative h-screen w-full bg-light-gray font-ubuntu transition-all'>
        <div className='absolute h-1/4 w-full bg-sidebar-mobile bg-cover bg-no-repeat'></div>
        <div className='relative flex h-full w-full flex-col items-center px-4'>
          {/* count step */}
          <div className='mb-8 mt-8 flex w-full justify-center gap-4 font-semibold text-white'>
            <CountStep currentStep={false} number={1} />
            <CountStep currentStep={true} number={2} />
            <CountStep currentStep={false} number={3} />
            <CountStep currentStep={false} number={4} />
          </div>
          {/* wrapper */}
          <div className='flex flex-col gap-4 rounded-md bg-alabaster p-6'>{step}</div>
          {/*  */}
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
