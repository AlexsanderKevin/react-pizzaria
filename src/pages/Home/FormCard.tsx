import React from "react";
import Button from "../../components/Button/Button.tsx";

export default function FormCard() {
  return (
    <section className="py-1 px-4 flex justify-center">
      <div className="max-w-screen-lg w-full flex justify-center flex-col items-center sm:flex-row sm:gap-5 bg-orange-50 p-3 -translate-y-12 rounded-xl shadow-md">

        <div className="h-60 w-full sm:h-full sm:w-72 bg-build-pizza bg-cover bg-center rounded-md" ></div>

        <div className="flex-1 flex h-full flex-col w-full p-4 pt-8 sm:pt-4">
          <h1 className="text-4xl sm:text-5xl font-semibold text-blue-600">
            Ou monte sua pizza
          </h1>
          <p className="mb-5 mt-2 text-orange-400">
            Escolha os ingredientes ideais para sua fome!
          </p>

          <div className="text-orange-900 mb-5">
            <p>1x Massa</p>
            <p>3x Ingredientes</p>
            <p>1x Borda</p>
            <p>+ Acompanhamento</p>
          </div>

          <Button className="sm:w-40">
            Pedir
          </Button>
        </div>

      </div>
    </section>
  )
}
