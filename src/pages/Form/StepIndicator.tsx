import React, { useContext } from "react";
import { FormContext } from "./FormContext.tsx";

export default function StepIndicator() {
  const formContext = useContext( FormContext )

  return (
    <>Step { formContext?.step }</>
  )
}
