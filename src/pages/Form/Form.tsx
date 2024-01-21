import React, { useContext } from "react";
import StepIndicator from "./StepIndicator.tsx";
import { FormContext, FormProvider } from "./FormContext.tsx";
import OrderPreview from "./OrderPreview.tsx";
import { Route, Routes } from "react-router-dom";
import FormNavigation from "./FormNavigation.tsx";
import ItemSelection from "./ItemSelection.tsx";
import SizeList from "../../mock/form/size.json"

export default function Form() {
  const formContext = useContext( FormContext )

  return(
    <>
      <section className="bg-orange-400 py-1 px-4 pt-10 pb-10 flex justify-center">
        <div 
          className={`
            ${Number(formContext?.step) < 5 ? 'max-w-screen-lg' : 'max-w-lg '}
            w-full mt-10
          `}
        >
          <h1 className="text-orange-50 font-semibold text-4xl ml-10">Monte sua Pizza</h1>
        </div>
      </section>

      <section className="bg-orange-100 py-1 px-4 pt-4 pb-16 flex justify-center">
        <div 
          className={`
            w-full flex flex-col sm:gap-10 bg-white p-10 -translate-y-12 rounded-xl shadow-md gap-10  
            ${Number(formContext?.step) < 5 ? 'max-w-screen-lg' : 'max-w-lg '}
            ${Number(formContext?.step) < 5 && 'sm:flex-row'}
          `}
        >

          <div className=" flex flex-col justify-between">
            <StepIndicator/>
            <OrderPreview/>
            <a 
              className="text-blue-600 font-semibold hover:text-blue-800"
              href="/"
            >Cancelar</a>
          </div>

          <div className="flex-1">
            <Routes>
              <Route path="/1" element={
                <ItemSelection title="Escolha o Tamanho" itemsList={SizeList}/>
              }/>
              <Route path="/2" element={
                <ItemSelection title="Escolha a Massa" itemsList={SizeList}/>
              }/>
              <Route path="/3" element={
                <ItemSelection title="Escolha os Ingredientes" itemsList={SizeList} totalItems={3}/>
              }/>
              <Route path="/4" element={
                <ItemSelection title="Escolha o Acompanhamento" itemsList={SizeList}/>
              }/>
              <Route path="/5" element={ null } />
            </Routes>

            <FormNavigation />
          </div>

        </div>
      </section>
    </>
  )
}
