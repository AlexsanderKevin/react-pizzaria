import React from "react";
import Logo from "../../assets/svg/pizza-logo.svg"

export default function Brand() {
  return (
    <a 
      href="/react-pizzaria/"
      className="flex gap-3 items-center active:scale-95 duration-300"
    >
      <img 
        className="h-12"
        src={Logo} 
        alt="Logo da pizzaria"
      />
      <div className="flex flex-col">
        <span className="text-white font-semibold text-2xl">
          PizzaStoom
        </span>
        <span className=" text-blue-600 font-bold">
          é pizza, sim!
        </span>
      </div>
    </a>
  )
}
