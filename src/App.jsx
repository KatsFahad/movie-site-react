
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Categories from "./Pages/Categories";
import New from "./Pages/New";
import Popular from "./Pages/Popular";
import Upcoming from "./Pages/Upcoming";
import AboutMe from "./Pages/About Me";
import './App.css'
import Comic from "./CategoryPages/Comic";
import Action from "./CategoryPages/Action";
import Animation from "./CategoryPages/Animation";
import Horror from "./CategoryPages/Horror";
import Adventure from "./CategoryPages/Adventure";

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

    <BrowserRouter>
      <Routes>
        <Route path="/action"  element={<Action/>}/>
        <Route path="/adventure" element={<Adventure/>}/>
        <Route path="/animation" element={<Animation/>}/>
        <Route path="/comic" element={<Comic/>}/>
        <Route path="/horror" element={<Horror/>}/>
        
      </Routes>
    </BrowserRouter>

    </div>
    
    </>
   );
}
 
export default App;