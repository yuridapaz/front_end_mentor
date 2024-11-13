import { FaMinus, FaPlus } from 'react-icons/fa6';
import React, { InputHTMLAttributes, useEffect } from 'react';

type props = InputHTMLAttributes<HTMLInputElement> & {
  handleIncreaseAmount: () => void;
  handleDecreaseAmount: () => void;
  itemQuantity: number;
};
const NumberInput = ({ handleIncreaseAmount, handleDecreaseAmount, itemQuantity, ...props }: props) => {
  return (
    <div className="absolute -bottom-5 left-2/4 flex h-12 w-44 -translate-x-2/4 items-center justify-around gap-3 rounded-full bg-redType px-2 py-3 transition-all">
      <button
        className="flex h-5 w-5 items-center justify-center rounded-full border-2 text-white"
        onClick={handleDecreaseAmount}
      >
        <FaMinus />
      </button>
      <input
        type="number"
        value={itemQuantity}
        className="ml-4 w-8 bg-transparent font-semibold text-white [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
        {...props}
        readOnly
      />
      <button
        className="flex h-5 w-5 items-center justify-center rounded-full border-2 text-white"
        onClick={handleIncreaseAmount}
      >
        <FaPlus />
      </button>
    </div>
  );
};

export default NumberInput;
