import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CustomNavbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'

function App() {
  return (
    <Router>
      <CustomNavbar />
      
      {/* Contenido que cambia según la ruta */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      
      <Footer />
    </Router>
  )
}

export default App
