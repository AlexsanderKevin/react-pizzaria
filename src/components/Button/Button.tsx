import React, { ReactNode } from "react";

interface IButtonProps {
  type?: string;
  children: ReactNode;
  className?: string | undefined;
  handleClick?: () => void;
  disabled: boolean;
}
export default function Button({ children, className, handleClick, type = 'primary', disabled = false }: IButtonProps) {
  return (
    <button 
      className={`
        ${type === 'primary' && 'text-white bg-blue-600 hover:bg-blue-700 border-blue-600'}
        ${type === 'secondary' && 'bg-white hover:bg-blue-500 hover:text-white border-2 border-blue-500 text-blue-500 font-semibold'}
        font-bold py-2 px-4 rounded-lg  active:scale-95 duration-200 border-2 
        disabled:opacity-50 disabled:active:scale-100 
        ${className}
      `}
      disabled={disabled}
      onClick={handleClick}
    >
      { children }
    </button>
  )
}
