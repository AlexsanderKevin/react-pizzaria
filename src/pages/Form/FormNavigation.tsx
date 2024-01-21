import React, { useContext } from "react";
import { FormContext } from "./FormContext.tsx";
import Button from "../../components/Button/Button.tsx";
import { useNavigate } from "react-router-dom";

export default function FormNavigation() {
  const formContext = useContext( FormContext )
  const navigate = useNavigate()

  const handleFinalization = (): void => {
    alert('Pedido finalizado!')
    navigate('/')
  }

  return (
    <div className="flex gap-5 justify-between">
      <Button
        type="secondary"
        handleClick={ formContext?.prevStep }
        disabled={formContext?.step === 1}
      >
        Anterior
      </Button>

      { Number(formContext?.step) < 5 ? (
        <Button
          type="primary"
          handleClick={ formContext?.nextStep }
          disabled={formContext?.step === 5}
        >
          Próximo
        </Button>
      ) : (
        <Button
          type="primary"
          handleClick={ handleFinalization }
        >
          Confirmar
        </Button>
      )}
    </div>
  )
}
