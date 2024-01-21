import React, { ReactNode, useEffect, useState } from "react";

interface IFormItem {
  name: string;
  price: number;
}
interface IContextTypes {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
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

  useEffect(() => {
    setPriceSum(
      Number(size?.price) +
      Number(dough?.price) +
      Number(ingredients?.price) +
      Number(addons?.price)
    )
  }, [ size, dough, ingredients, addons ])

  return (
    <FormContext.Provider
      value={{
        step, setStep,
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
