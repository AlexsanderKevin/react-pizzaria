import React, { useState } from "react";
import FormCard from "./FormCard.tsx";

interface IFormItem {
  name: string;
  price: number;
}
interface IItem {
  name: string;
  description: string;
  price: number;
  imgUrl: string
}
interface IItemSelectionProps {
  title: string;
  itemsList: IItem[];
  changeFunction: React.Dispatch<React.SetStateAction<IFormItem|null>>;
  itemField: IFormItem | null;
}
export default function ItemSelection({ title, itemsList, changeFunction, itemField }: IItemSelectionProps) {

  return (
    <section className="mb-10">
      <div className="flex justify-between items-center mb-5">
        <h1 className="font-semibold text-blue-500 text-2xl">
          {title}:
        </h1>

        <p className="bg-gray-300 text-gray-700 font-semibold text-xs py-1 px-4 rounded">
          {itemField ? 1 : 0} / 1
        </p>
      </div>

      <div className="">
        {itemsList.map(item => (
          <FormCard 
            key={item.name} 
            changeFunction={ changeFunction }
            {...item} 
            itemField={ itemField }
          />
        ))}
      </div>
    </section>
  )
}
