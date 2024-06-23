// import { createContext } from 'react'
// import RuleComponent1 from './components/RuleComponent1'
// import RuleComponent2 from './components/RuleComponent2'

import NavBar from "./components/NavBar";
import Router from "./routes/Router";
import './App.css'

function App() {

  return (
    <>

      <div className="App">

        <NavBar />
        <Router />

      </div>
      
    </>
  )
}

export default App
