type Props = {
  number: number;
  complete: boolean;
};

const CountStep = ({ number, complete }: Props) => {
  return (
    <div
      className={`flex h-8 w-8 items-center justify-center rounded-full border border-white font-semibold ${complete ? 'bg-light-blue text-marine-blue' : 'bg-none'} cursor-pointer`}>
      {number}
    </div>
  );
};

export default CountStep;
