import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home/Home.tsx'
import Header from "./components/Header/Header.tsx";
import Form from "./pages/Form/Form.tsx";
import NotFound from "./pages/NofFound/NotFount.tsx";
import { GlobalProvider } from "./GlobalContext.tsx";
import FinishOrder from "./pages/FinishOrder/FinishOrder.tsx";

function App() {
  return (
    <>
      <GlobalProvider>
        <Header/>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/form' element={<Form />}/>
            <Route path='/finish-order' element={<FinishOrder />}/>
            <Route path='*' element={<NotFound />}/>
          </Routes>
        </BrowserRouter>
      </GlobalProvider>
    </>
  );
}

export default App;
