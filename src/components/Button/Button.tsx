import React, { ReactNode } from "react";

interface IButtonProps {
  children: ReactNode;
  className?: string | undefined;
}
export default function Button({ children, className }: IButtonProps) {
  return (
    <button 
      className={`bg-blue-600 text-white font-bold p-2 rounded-lg hover:scale-105 active:scale-100 duration-200 ${className}`}
    >
      { children }
    </button>
  )
}
