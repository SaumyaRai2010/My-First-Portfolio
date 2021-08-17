import Topbar from "./components/topbar/Topbar"
import Intro from "./components/intro/Intro"
import Portfolio from "./components/portfolio/portfolio";
import Testimonials from "./components/testimonials/testimonials";
import Works from "./components/works/works";
import Contact from "./components/contact/contact";
import "./app.scss"
import {useState} from "react";
function App() {
  const [menuOpen,setMenuOpen] = useState(true)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro/>
        <Portfolio/>
        <Testimonials/>
        <Works/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
