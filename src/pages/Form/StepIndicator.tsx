import React, { ReactNode, useContext } from "react";
import { FormContext } from "./FormContext.tsx";

interface IStepProps {
  stepNumber: number;
}
export function Step({ stepNumber }: IStepProps) {
  const formContext = useContext( FormContext )

  return(
    <div className="flex flex-col items-center relative">
      <div 
        className={`
          flex justify-center items-center border-4  rounded-full h-10 w-10  font-bold

          ${ stepNumber > 1 && "before:content-[' '] before:h-1 before:w-10 before:absolute before:-translate-x-9 before:z-0 z-1" }

          ${ Number(formContext?.step) >= stepNumber ? 
            'bg-blue-500 border-blue-500 text-white before:bg-blue-500' :
            'text-gray-400 bg-white border-gray-400 before:bg-gray-400'
          }
        `}
      >{stepNumber}</div>
      <p className="w-14 text-sm text-center">Passo {stepNumber}</p>
    </div>
  )
}

export default function StepIndicator() {
  return (
    <div className='flex w-full justify-center gap-5' >

      <Step stepNumber={1}/>
      <Step stepNumber={2}/>
      <Step stepNumber={3}/>
      <Step stepNumber={4}/>
      <Step stepNumber={5}/>

    </div>
  )
}
