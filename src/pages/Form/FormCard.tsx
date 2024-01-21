import React from "react";

interface ICardProps {
  name: string;
  description: string;
  price: number;
  imgUrl: string
}
export default function FormCard({ imgUrl, name, description, price }: ICardProps) {

  return (
    <div className="mb-3 shadow rounded-lg border flex">
      <img className="w-24 rounded-l-lg overflow-hidden object-cover" src={imgUrl} alt="" />

      <div className="flex flex-col gap-2 p-4 flex-1">
        <h1 className="font-semibold text-xl text-orange-400">{name}</h1>
        <p className="text-orange-900 text-xs">{description}</p>
        <p className="text-end font-semibold text-blue-600">R${price.toFixed(2)}</p>
      </div>
    </div>
  )
}
