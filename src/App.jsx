
import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import Router from "./routes/Router";
import './App.css'

function App() {

  return (
    <>
        <BrowserRouter>
        <NavBar />
          <Router />
      </BrowserRouter>
    </>
  )
}

export default App
