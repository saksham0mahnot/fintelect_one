import { useLenis } from './hooks/useLenis'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import './index.css'

function App() {
  // Initialize Lenis smooth scroll
  useLenis()

  return (
    <>
      <Navbar />
      <Home />
    </>
  )
}

export default App
