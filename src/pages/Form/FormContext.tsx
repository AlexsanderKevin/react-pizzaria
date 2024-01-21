import React, { ReactNode, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

interface IFormItem {
  name: string;
  price: number;
}
interface IContextTypes {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  nextStep: () => void;
  prevStep: () => void;
  jumpToStep: (step: number) => void;
  size: IFormItem | null; 
  setSize: React.Dispatch<React.SetStateAction<IFormItem|null>>;
  dough: IFormItem | null;
  setDough: React.Dispatch<React.SetStateAction<IFormItem|null>>;
  ingredients: IFormItem | null;
  setIngredients: React.Dispatch<React.SetStateAction<IFormItem|null>>;
  addons: IFormItem | null;
  setAddons: React.Dispatch<React.SetStateAction<IFormItem|null>>;
  priceSum: number;
  setPriceSum: React.Dispatch<React.SetStateAction<number>>
}
export const FormContext = React.createContext<IContextTypes|null>(null);

interface IProvicerProps {
  children: ReactNode
}

export const FormProvider = ({ children }: IProvicerProps ) => {
  const [ step, setStep ] = useState<number>(1)
  const [ size, setSize ] = useState<IFormItem|null>(null)
  const [ dough, setDough ] = useState<IFormItem|null>(null)
  const [ ingredients, setIngredients ] = useState<IFormItem|null>(null)
  const [ addons, setAddons ] = useState<IFormItem|null>(null)
  const [ priceSum, setPriceSum ] = useState<number>(0)

  const navigate = useNavigate()

  useEffect(() => {
    setPriceSum(
      (size?.price || 0) +
      (dough?.price || 0) +
      (ingredients?.price || 0) +
      (addons?.price || 0)
    )
  }, [ size, dough, ingredients, addons ])

  const nextStep = (): void => {
    const next = (step + 1) > 5 ? 5 : step + 1 
    setStep(next)
    navigate(next.toString())
    localStorage.setItem('currentStep', next.toString())
  }

  const prevStep = (): void => {
    const prev = (step - 1) < 1 ? 1 : step - 1 
    setStep(prev)
    navigate(prev.toString())
  }

  const jumpToStep = (step: number): void => {
    setStep(step)
    navigate(step.toString())
  }

  return (
    <FormContext.Provider
      value={{
        step, setStep, nextStep, prevStep, jumpToStep,
        size, setSize, 
        dough, setDough, 
        ingredients, setIngredients,
        addons, setAddons,
        priceSum, setPriceSum
      }}
    >
      { children }
    </FormContext.Provider>
  )
}
