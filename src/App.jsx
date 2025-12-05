import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Menu from './Pages/Menu'
import SpeciatDish from './Pages/SpeciatDish'
import Contact_us from './Pages/Contact_us'
function App() {
  

  return (
    <>
      <Navbar />
      <Home />
      <Menu />
      <SpeciatDish />
      <Contact_us />


    </>
  )
}

export default App
