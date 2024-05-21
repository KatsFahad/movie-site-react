
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Categories from "./Pages/Categories";
import New from "./Pages/New";
import Popular from "./Pages/Popular";
import Upcoming from "./Pages/Upcoming";
import AboutMe from "./Pages/About Me";
import './App.css'

const App = () => {
  return ( 
    <>
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/categories" element={<Categories/>}/>
        <Route path="/new" element={<New/>}/>
        <Route path="/popular" element={<Popular/>}/>
        <Route path="/upcoming" element={<Upcoming/>}/>
        <Route path="/aboutme" element={<AboutMe/>}/>

      </Routes>
    </BrowserRouter>

    </div>
    
    </>
   );
}
 
export default App;