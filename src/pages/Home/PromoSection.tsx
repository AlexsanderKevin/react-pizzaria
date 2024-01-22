import React, { useState, useEffect } from "react";
import promoPizza from "../../mock/promoPizza.json"
import Button from "../../components/Button/Button.tsx";
import { useNavigate } from "react-router-dom";

export default function PromoSection() {
  const navigate = useNavigate()

  return (
    <section className="bg-orange-400 py-1 px-4 pt-4 pb-16 flex justify-center">
      <div className="max-w-screen-lg w-full flex justify-center flex-col items-center sm:flex-row sm:gap-5">

        <div className="bg-promo-pizza bg-cover w-full h-96 flex justify-end max-w-sm bg-center">

          <div className="bg-point-tag flex flex-col items-center justify-center h-20 w-20 bg-cover mr-14 hover:scale-110 duration-300">
            <p className="text-white font-semibold text-2xl h-7">{ promoPizza?.points }</p>
            <p className="text-white text-xs mb-2">pontos</p>
          </div>

        </div>

        <article className="w-full flex justify-center flex-col max-w-sm py-8 gap-5">
          <div className="flex flex-col">
            <p className="text-blue-600 font-semibold">
              Ganhe pontos ao pedir a
            </p>
            <h1 className="text-white font-semibold text-6xl">
              Pizza do dia
            </h1>

            <p className="text-white text-right w-full pr-10">
              <span className="text-lg">R$</span>
              <span className="text-blue-600 font-bold text-4xl">{ promoPizza?.price.toFixed(2) }</span>
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:ml-14 mb-3">
            <h2 className="font-semibold text-orange-100 text-3xl capitalize">
              { promoPizza?.name }
            </h2>

            <div>
              <p className="font-bold text-orange-700"> Massa: </p>
              <p className="text-orange-900 capitalize">{ promoPizza?.dough }</p>
            </div>

            <div>
              <p className="font-bold text-orange-700"> Ingredientes: </p>
              <p className="text-orange-900 max-w-xs">{ promoPizza?.ingredients }</p>
            </div>
          </div>

          <Button 
            className="sm:ml-14"
            handleClick={() => navigate('finish-order')}
          >
            Eu quero!
          </Button>
        </article>
      </div>
    </section>
  )
}
