import React from "react";

interface ICardProps {
  name: string;
  description: string;
  price: number;
  imgUrl: string
}
export default function FormCard({ imgUrl, name, description, price }: ICardProps) {

  return (
    <div>
      <img src={imgUrl} alt="" />
      <h1>{name}</h1>
      <p>{description}</p>
      <p>R${price.toFixed(2)}</p>
    </div>
  )
}
