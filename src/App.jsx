import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Business from "./pages/Business";
import Entertainment from './pages/Entertainment';
import General from './pages/General';
import Health from './pages/Health';
import Science from './pages/Science';
import Sports from './pages/Sports';
import Technology from './pages/Technology';
import Header from "./components/Header";
import Footer from "./components/Footer";


export default function App(){

  return <div className="w-[100%] h-[100vh] flex flex-col justify-between">
    <BrowserRouter>
      <Header />
      
      <div className="flex-1 px-50 py-5 flex flex-col">
        <div className="mb-4 w-[100%] h-[40px] border-[2px] border-[#109BE9] rounded shadow shadow-zinc-500 flex justify-between items-center">
          <input type="text" placeholder="Searching..." className="w-[100%] h-[100%] px-4 outline-none flex-1"/>
          <p className="w-[40px] h-[100%] flex items-center justify-center">
            <i className="fa-solid fa-magnifying-glass text-[17px] text-[#0015ff] cursor-pointer hover:text-[#109BE9] transition-all duration-150 active:duration-75 active:scale-90"></i>
          </p>
        </div>

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/business" element={<Business />}></Route>
          <Route path="/entertainment" element={<Entertainment />}></Route>
          <Route path="/general" element={<General />} />
          <Route path="/health" element={<Health />} />
          <Route path="/science" element={<Science />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/technology" element={<Technology />} />
        </Routes>

      </div>

      <Footer />
    </BrowserRouter>
  </div>
}