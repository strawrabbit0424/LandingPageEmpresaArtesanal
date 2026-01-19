import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CustomNavbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import ContactPage from './pages/ContactPage'
import Team from './pages/Team'
import Testimonials from './pages/Testimonials'

function App() {
  return (
    <Router>
      <CustomNavbar />
      
      {/* Contenido que cambia según la ruta */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<ContactPage />} />
        <Route path="/equipo" element={<Team />} />
        <Route path="/testimonios" element={<Testimonials />} />
      </Routes>
      
      <Footer />
    </Router>
  )
}

export default App
