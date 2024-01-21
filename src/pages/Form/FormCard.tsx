import React from "react";

interface ICardProps {
  name: string;
  description: string;
  price: number;
  imgUrl: string
}
export default function FormCard({ imgUrl, name, description, price }: ICardProps) {

  return (
    <div className="mb-2 shadow rounded-lg p-2 border">
      <img src={imgUrl} alt="imagem ilustrativa" />

      <div className="flex flex-col gap-3 p-2">
        <h1 className="font-semibold text-xl text-orange-400">{name}</h1>
        <p className="text-orange-900 text-sm">{description}</p>
        <p className="text-end font-semibold text-blue-600">R${price.toFixed(2)}</p>
      </div>
    </div>
  )
}
