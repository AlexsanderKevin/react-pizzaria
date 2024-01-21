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

      {formContext?.filling && 
        <div>
          <p className="font-semibold text-orange-400">Recheio:</p>
          <p className="text-orange-900 capitalize">
            { formContext.filling.name }
            <span className="ml-5 text-sm text-blue-500">
              R${ formContext.filling.price.toFixed(2) }
            </span>
          </p>
        </div>
      }

      {formContext?.border && 
        <div>
          <p className="font-semibold text-orange-400">Borda:</p>
          <p className="text-orange-900 capitalize">
            { formContext.border.name }
            <span className="ml-5 text-sm text-blue-500">
              R${ formContext.border.price.toFixed(2) }
            </span>
          </p>
        </div>
      }

      <div>
        <p className="font-semibold text-orange-400">
          { Number(formContext?.step) < 5 ? 'Sub-total:' : 'Total a pagar:'}
        </p>
        <p className="text-orange-900 capitalize">
          R${ formContext?.priceSum.toFixed(2) }
        </p>
      </div>

    </article>
  )
}
