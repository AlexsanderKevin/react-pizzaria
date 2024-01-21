import React, { ReactNode } from "react";

interface IButtonProps {
  type?: string;
  children: ReactNode;
  className?: string | undefined;
  handleClick?: () => void;
}
export default function Button({ children, className, handleClick, type = 'primary' }: IButtonProps) {
  return (
    <button 
      className={`
        ${type === 'primary' && 'bg-blue-600 hover:bg-blue-700'}
        ${type === 'secondary' && 'bg-white hover:bg-blue-500 hover:text-white border-2 border-blue-500 text-blue-500 font-semibold'}
        text-white font-bold py-2 px-4 rounded-lg  active:scale-95 duration-200 ${className}
      `}
      onClick={handleClick}
    >
      { children }
    </button>
  )
}
