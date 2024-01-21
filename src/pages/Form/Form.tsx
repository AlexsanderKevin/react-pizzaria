import React from "react";
import StepIndicator from "./StepIndicator.tsx";
import { FormProvider } from "./FormContext.tsx";

export default function Form() {
  return(
    <FormProvider>
      <section className="bg-orange-400 py-1 px-4 pt-10 pb-10 flex justify-center">
        <div className="max-w-screen-lg w-full mt-10">
          <h1 className="text-orange-50 font-semibold text-4xl ml-10">Montar sua Pizza</h1>
        </div>
      </section>

      <section className="bg-orange-100 py-1 px-4 pt-4 pb-16 flex justify-center">
        <div className="max-w-screen-lg w-full flex flex-col sm:gap-5 bg-white p-10 -translate-y-12 rounded-xl shadow-md gap-5">
          <StepIndicator/>
        </div>
      </section>
    </FormProvider>
  )
}
