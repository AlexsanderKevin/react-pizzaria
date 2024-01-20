import React, { useState, useEffect } from "react";
import jsonPromoPizza from "../../mock/promoPizza.json"

interface IPromoPizza {
  price: number;
  points: number;
  name: string;
  dough: string;
  ingredients: string;
}
export default function Home ( ) {
  const [ promoPizza, setPromoPizza ] = useState<IPromoPizza|null>(null)

  useEffect(() => setPromoPizza(jsonPromoPizza), [])

  return (
    <section className="bg-orange-400 py-1 px-2 flex justify-center">
      <div className="max-w-screen-lg w-full flex justify-center">
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

          <div className="flex flex-col gap-3">
            <h2 className="font-semibold text-orange-100 text-3xl capitalize">
              { promoPizza?.name }
            </h2>

            <div>
              <p className="font-bold text-orange-700">
                Massa:
              </p>
              <p className="text-orange-900 capitalize">
                { promoPizza?.dough }
              </p>
            </div>

            <div>
              <p className="font-bold text-orange-700">
                Ingredientes:
              </p>
              <p className="text-orange-900 max-w-xs">
                { promoPizza?.ingredients }
              </p>
            </div>
          </div>

          <button className="bg-blue-600 text-white font-bold p-2 rounded-lg hover:scale-105 active:scale-100 duration-200">
            Eu quero!
          </button>
        </article>
      </div>
    </section>
  )
}
