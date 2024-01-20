import React, { ReactNode } from "react";

interface IButtonProps {
  children: ReactNode;
  className?: string | undefined;
  handleClick?: () => void;
}
export default function Button({ children, className, handleClick }: IButtonProps) {
  return (
    <button 
      className={`bg-blue-600 text-white font-bold p-2 rounded-lg hover:bg-blue-700 active:scale-95 duration-200 ${className}`}
      onClick={handleClick}
    >
      { children }
    </button>
  )
}
