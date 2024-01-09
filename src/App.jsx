import Footer from "./component/Footer"
import { Outlet } from "react-router-dom"
import Navigation from "./component/Navigation"



function App() {

  return (
    <>
      <Navigation/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
