import React, { useContext } from "react";
import { FormContext } from "./FormContext.tsx";

export default function OrderPreview() {
  const formContext = useContext( FormContext )

  return(
    <article className="flex flex-col gap-6 mt-14 mb-10 flex-1">
      <h1 className="text-orange-400 font-semibold text-2xl">
        { Number(formContext?.step) < 5 ? 'Pré visualização' : 'Finalizar Pedido'}
        
      </h1>

      {formContext?.size && 
        <div>
          <p className="font-semibold text-orange-400">Tamanho:</p>
          <p className="text-orange-900 capitalize">
            { formContext.size.name }
            <span className="ml-5 text-sm text-blue-500">
              R${ formContext.size.price.toFixed(2) }
            </span>
          </p>
        </div>
      }

      {formContext?.dough && 
        <div>
          <p className="font-semibold text-orange-400">Massa:</p>
          <p className="text-orange-900 capitalize">
            { formContext.dough.name }
            <span className="ml-5 text-sm text-blue-500">
              R${ formContext.dough.price.toFixed(2) }
            </span>
          </p>
        </div>
      }

      {formContext?.ingredients && 
        <div>
          <p className="font-semibold text-orange-400">Ingredientes:</p>
          <p className="text-orange-900 capitalize">
            { formContext.ingredients.name }
            <span className="ml-5 text-sm text-blue-500">
              R${ formContext.ingredients.price.toFixed(2) }
            </span>
          </p>
        </div>
      }

      {formContext?.addons && 
        <div>
          <p className="font-semibold text-orange-400">Acompanhamento:</p>
          <p className="text-orange-900 capitalize">
            { formContext.addons.name }
            <span className="ml-5 text-sm text-blue-500">
              R${ formContext.addons.price.toFixed(2) }
            </span>
          </p>
        </div>
      }

      <div>
        <p className="font-semibold text-orange-400">Sub-total:</p>
        <p className="text-orange-900 capitalize">
          R${ formContext?.priceSum.toFixed(2) }
        </p>
      </div>

    </article>
  )
}
