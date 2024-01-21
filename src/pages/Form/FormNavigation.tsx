import React, { useContext } from "react";
import { FormContext } from "./FormContext.tsx";
import Button from "../../components/Button/Button.tsx";

export default function FormNavigation() {
  const formContext = useContext( FormContext )

  return (
    <div className="flex gap-5 justify-between">
      <Button
        type="secondary"
        handleClick={ formContext?.prevStep }
        disabled={formContext?.step === 1}
      >
        Anterior
      </Button>

      <Button
        type="primary"
        handleClick={ formContext?.nextStep }
        disabled={formContext?.step === 5}
      >
        Próximo
      </Button>
    </div>

  )
}
