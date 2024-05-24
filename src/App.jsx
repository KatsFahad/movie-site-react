
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Categories from "./Pages/Categories";
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
        <Route path="/aboutme" element={<AboutMe/>}/>
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