import React, { ReactNode } from "react";

interface IContainerProps {
  children: ReactNode
}
export default function Container({ children }: IContainerProps) {
  return (
    <div className="max-w-screen-lg w-full flex justify-between">
      { children }
    </div>
  )
}
