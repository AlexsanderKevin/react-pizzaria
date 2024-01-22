import React, { useContext } from "react";
import promoPizza from "../../mock/promoPizza.json"
import Button from "../../components/Button/Button.tsx";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../GlobalContext.tsx";

export default function FinishOrder() {
  const navigate = useNavigate();
  const { addStoomPoints } = useContext( GlobalContext )

  const handleConfirmation = (): void => {
    addStoomPoints(promoPizza?.points || 0);
    alert(`Você ganhou ${promoPizza?.points} pontos!`)
    navigate('/react-pizzaria/')
  }

  return (
    <>
      <section className="bg-orange-400 py-1 px-4 pt-10 pb-10 flex justify-center">
        <div className="max-w-md w-full mt-10">
          <h1 className="text-orange-50 font-semibold text-4xl ml-10">Finalizar Pedido</h1>
        </div>
      </section>

      <section className="bg-orange-100 py-1 px-4 pt-4 pb-16 flex justify-center">

        <div className="max-w-md w-full flex flex-col sm:gap-5 bg-white p-10 -translate-y-12 rounded-xl shadow-md gap-5">
          <h1 className="text-2xl font-semibold text-orange-400 capitalize">{ promoPizza?.name }</h1>

          <div>
            <p className="text-orange-400 font-semibold">Tamanho: </p>
            <p className="text-orange-900 capitalize">{ promoPizza?.size }</p>
          </div>

          <div>
            <p className="text-orange-400 font-semibold">Massa: </p>
            <p className="text-orange-900 capitalize">{ promoPizza?.dough }</p>
          </div>

          <div>
            <p className="text-orange-400 font-semibold">Ingredientes: </p>
            <p className="text-orange-900">{ promoPizza?.ingredients }</p>
          </div>

          <div>
            <p className="text-orange-400 font-semibold">Pontos: </p>
            <p className="text-orange-900 capitalize">{ promoPizza?.points }</p>
          </div>

          <div>
            <p className="text-orange-400 font-semibold">Preço: </p>
            <p className="text-orange-900 capitalize">R${ promoPizza?.price.toFixed(2) }</p>
          </div>

          <div className="flex flex-col-reverse sm:flex-row gap-3 sm:gap-5 mt-5">
            <Button 
              type="secondary"
              handleClick={() => navigate('/react-pizzaria/')}
              className="flex-1"
            >
              Voltar
            </Button>

            <Button 
              type="primary"
              handleClick={handleConfirmation}
              className="flex-1"
            >
              Confirmar
            </Button>
          </div>
        </div>

      </section>
    </>
  )
}
