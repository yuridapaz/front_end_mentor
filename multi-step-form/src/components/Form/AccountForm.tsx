import { Input, InputErrorMessage, InputLabel } from '../Input';

import Heading from '../Heading';

const AccountForm = () => {
  return (
    <>
      <Heading title='Plans' description='Add-ons help enhance your gaming experience.' />
      <div className='flex flex-col gap-4'>
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
      </div>
    </>
  );
};

export default AccountForm;
