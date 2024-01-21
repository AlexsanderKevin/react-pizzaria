import React, { useState } from "react";
import FormCard from "./FormCard.tsx";
import Sizes from "../../mock/form/size.json"

interface IItem {
  name: string;
  description: string;
  price: number;
  imgUrl: string
}
interface IItemSelectionProps {
  title: string;
  totalItems?: number|undefined;
  itemsList: IItem[]
}
export default function ItemSelection({ title, totalItems = 1, itemsList }: IItemSelectionProps) {
  const [ itemsSelected, setItemsSelected ] = useState<number>(0)

  return (
    <section className="mb-10">
      <div className="flex justify-between items-center mb-5">
        <h1 className="font-semibold text-blue-500 text-2xl">
          {title}:
        </h1>

        <p className="bg-gray-300 text-gray-700 font-semibold text-xs py-1 px-4 rounded">0 / {totalItems}</p>
      </div>

      <div>
        {itemsList.map(item => <FormCard key={item.name} {...item}/>)}
      </div>
    </section>
  )
}