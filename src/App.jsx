import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import { Routes ,Route} from "react-router-dom"

function App() {

  return (
    <div className="bg-gradient-to-t from-[#fef9b9] p-2">

      <Navbar/>

      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="*"  element ={<div>Page Not Found</div>}/>
      </Routes>

      <Footer/>
       
    </div>
  )
}

export default App
