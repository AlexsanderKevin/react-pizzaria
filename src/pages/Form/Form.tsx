import React, { useContext } from "react";
import StepIndicator from "./StepIndicator.tsx";
import { FormContext, FormProvider } from "./FormContext.tsx";
import OrderPreview from "./OrderPreview.tsx";
import { Route, Routes } from "react-router-dom";
import FormNavigation from "./FormNavigation.tsx";
import ItemSelection from "./ItemSelection.tsx";
import sizeList from "../../mock/form/sizeList.json"
import doughList from "../../mock/form/doughList.json"
import fillingList from "../../mock/form/fillingList.json"
import borderList from "../../mock/form/borderList.json"

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
            w-full flex flex-col sm:gap-10 bg-white p-5 sm:p-10 -translate-y-12 rounded-xl shadow-md gap-10  
            ${Number(formContext?.step) < 5 ? 'max-w-screen-lg' : 'max-w-lg '}
            ${Number(formContext?.step) < 5 && 'sm:flex-row'}
          `}
        >

          <div className=" flex flex-col justify-between">
            <StepIndicator/>
            <OrderPreview/>
            <a 
              className="text-blue-600 font-semibold hover:text-blue-800"
              href="/react-pizzaria/"
            >Cancelar</a>
          </div>

          <div className="flex-1">
            <Routes>
              <Route path="/1" element={
                <ItemSelection 
                  title="Escolha o Tamanho" 
                  itemsList={sizeList} 
                  changeFunction={formContext!.setSize}
                  itemField={formContext!.size}
                />
              }/>
              <Route path="/2" element={
                <ItemSelection 
                  title="Escolha a Massa" 
                  itemsList={doughList} 
                  changeFunction={formContext!.setDough}
                  itemField={formContext!.dough}
                />
              }/>
              <Route path="/3" element={
                <ItemSelection 
                  title="Escolha o Recheio" 
                  itemsList={fillingList} 
                  changeFunction={formContext!.setFilling}
                  itemField={formContext!.filling}
                />
              }/>
              <Route path="/4" element={
                <ItemSelection 
                  title="Escolha a Borda" 
                  itemsList={borderList} 
                  changeFunction={formContext!.setBorder}
                  itemField={formContext!.border}
                />
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
