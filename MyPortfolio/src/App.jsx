
import './App.css'
import {useState} from "react"
import Header from "./components/Header"
import AboutMe from "./components/AboutMe"
import Skills from "./components/Skills"
import Footer from "./components/Footer"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function App() {
  const [mode, setMode] = useState(true)

    

    function changeMode(){
        setMode(prevMode => !prevMode);
        const headerStyle = document.querySelector('header').style;
        headerStyle.backgroundColor = mode ? "rgba(0,0,0,0.4)" : "rgba(255,255,255,0.4)"
        document.getElementById("main--body").className = !mode ? "light--mode" : "dark--mode"
        
    }

  return (
    <>
      <Header 
      mode={mode}
      changeMode={changeMode} />
      <AboutMe mode={mode} />
      <Skills mode={mode} />
      <Footer />

    </>
  )
}

export default App
