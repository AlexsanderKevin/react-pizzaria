import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home/Home.tsx'
import Header from "./components/Header/Header.tsx";
import Form from "./pages/Form/Form.tsx";
import NotFound from "./pages/NofFound/NotFount.tsx";

function App() {
  return (
    <>
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/form' element={<Form />}/>
          <Route path='*' element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
