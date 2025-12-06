import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Menu from './Pages/Menu'
import SpeciatDish from './Pages/SpeciatDish'
import Contact_us from './Pages/Contact_us'
import About_us from './Pages/About_us'
function App() {
  

  return (
    <>
      <Navbar />
      <Home />
      <About_us />
      <Menu />
      <SpeciatDish />
      
      <Contact_us />


    </>
  )
}

export default App
