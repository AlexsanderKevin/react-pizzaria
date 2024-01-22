import React, { useContext, useEffect, useState } from "react";
import { FormContext } from "./FormContext";

interface IFormItem {
  name: string;
  price: number;
}
interface ICardProps {
  name: string;
  description: string;
  price: number;
  imgUrl: string;
  changeFunction: React.Dispatch<React.SetStateAction<IFormItem|null>>;
  itemField: IFormItem | null;
}
export default function FormCard({ imgUrl, name, description, price, changeFunction, itemField }: ICardProps) {
  const [ isChecked, setIsChecked ] = useState<boolean>(false)

  useEffect(() => {
    if (itemField) {
      setIsChecked(itemField.name === name)
    }
  }, [ itemField ])

  const handleChange = (event) => {
    if (event.target.checked) {
      setIsChecked(true)
      changeFunction({ name, price })
    } else {
      setIsChecked(false)
    }
  }

  return (
    <button className="w-full">
      <label 
        className={`
          mb-3 shadow rounded-lg flex border-2 hover:border-blue-600 pointer
          ${ isChecked && 'border-blue-600'}
        `}
      >
        <img className="w-24 rounded-l-lg overflow-hidden object-cover" src={imgUrl} alt="" />

        <div className="flex flex-col gap-2 p-4 flex-1">
          <div className="flex justify-between items-center">
            <h1 className="font-semibold text-lg sm:text-xl text-start text-orange-400">{name}</h1>
            <input 
              type="radio" 
              name="radio" 
              value={name} 
              checked={isChecked}
              onChange={ handleChange }
              className="scale-125"
            ></input>
          </div>

          <p className="text-orange-900 text-xs text-start">{description}</p>
          <p className="text-end font-semibold text-blue-600">R${price.toFixed(2)}</p>
        </div>
      </label>
    </button>
  )
}
