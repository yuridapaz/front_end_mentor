type Props = {
  number: number;
  currentStep: boolean;
};

const CountStep = ({ number, currentStep }: Props) => {
  return (
    <div
      className={`flex h-8 w-8 items-center justify-center rounded-full border border-white font-semibold ${currentStep ? 'bg-light-blue text-marine-blue' : 'bg-none'} cursor-pointer`}>
      {number}
    </div>
  );
};

export default CountStep;
