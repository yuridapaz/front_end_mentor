import React from 'react';

type Props = {
  title: string;
  description: string;
};

const Heading = ({ title, description }: Props) => {
  return (
    <div className='flex flex-col gap-2'>
      <p className='text-2xl font-semibold text-marine-blue'>{title}</p>
      <span className='text-md font-light text-cool-gray'>{description}</span>
    </div>
  );
};

export default Heading;
