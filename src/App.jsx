
import './App.css'
import Navigation from './component/Navigation'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
        <Navigation/>
        <Outlet/>
      
    </>
  )
}

export default App
