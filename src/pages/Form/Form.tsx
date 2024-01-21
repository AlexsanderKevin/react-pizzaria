import React, { useContext } from "react";
import StepIndicator from "./StepIndicator.tsx";
import { FormContext, FormProvider } from "./FormContext.tsx";
import OrderPreview from "./OrderPreview.tsx";
import { Route, Routes } from "react-router-dom";
import ChooseSize from "./steps/ChooseSize.tsx";
import ChooseDough from "./steps/ChooseDough.tsx";
import Button from "../../components/Button/Button.tsx";
import FormNavigation from "./FormNavigation.tsx";

export default function Form() {

  return(
    <FormProvider>
      <section className="bg-orange-400 py-1 px-4 pt-10 pb-10 flex justify-center">
        <div className="max-w-screen-lg w-full mt-10">
          <h1 className="text-orange-50 font-semibold text-4xl ml-10">Montar sua Pizza</h1>
        </div>
      </section>

      <section className="bg-orange-100 py-1 px-4 pt-4 pb-16 flex justify-center">
        <div className="max-w-screen-lg w-full flex flex-col sm:flex-row sm:gap-10 bg-white p-10 -translate-y-12 rounded-xl shadow-md gap-5">

          <div className="">
            <StepIndicator/>
            <OrderPreview/>
            <a 
              className="text-blue-600 font-semibold"
              href="/"
            >Voltar</a>
          </div>

          <div className="flex-1">
            <Routes>
              <Route path="/1" element={ <ChooseSize/> } />
              <Route path="/2" element={ <ChooseDough/> } />
              <Route path="/3" element={ <ChooseDough/> } />
              <Route path="/4" element={ <ChooseDough/> } />
              <Route path="/5" element={ <ChooseDough/> } />
            </Routes>

            <FormNavigation />
          </div>

        </div>
      </section>
    </FormProvider>
  )
}
