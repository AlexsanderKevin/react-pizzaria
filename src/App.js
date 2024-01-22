import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home/Home.tsx'
import Header from "./components/Header/Header.tsx";
import Form from "./pages/Form/Form.tsx";
import NotFound from "./pages/NofFound/NotFount.tsx";
import { GlobalProvider } from "./GlobalContext.tsx";
import FinishOrder from "./pages/FinishOrder/FinishOrder.tsx";
import { FormProvider } from "./pages/Form/FormContext.tsx";

function App() {
  return (
    <>
      <GlobalProvider>
        <Header/>
        <BrowserRouter>
          <Routes>
            <Route path='react-pizzaria/' element={<Home />}/>
            <Route path='react-pizzaria/form/*' element={<FormProvider><Form /></FormProvider> }/>
            <Route path='react-pizzaria/finish-order' element={<FinishOrder />}/>
            <Route path='react-pizzaria/*' element={<NotFound />}/>
          </Routes>
        </BrowserRouter>
      </GlobalProvider>
    </>
  );
}

export default App;
