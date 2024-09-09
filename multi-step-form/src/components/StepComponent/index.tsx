type Props = {
  number: number;
  currentStep: number;
};

const CountStep = ({ number, currentStep }: Props) => {
  return (
    <div
      className={`flex h-8 w-8 items-center justify-center rounded-full border border-white font-semibold md:h-10 md:w-10 ${currentStep + 1 === number ? 'bg-light-blue text-marine-blue' : 'bg-none'} cursor-default`}>
      {number}
    </div>
  );
};

export default CountStep;
