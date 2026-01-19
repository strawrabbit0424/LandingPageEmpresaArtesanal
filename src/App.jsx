import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CustomNavbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import ContactPage from './pages/ContactPage'
import ServicesPage from './pages/ServicesPage';
import { MdContactPage } from 'react-icons/md'

function App() {
  return (
    <Router>
      <CustomNavbar />
      
      {/* Contenido que cambia según la ruta */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<ContactPage />} />
        <Route path="/servicios" element={<ServicesPage />} />
      </Routes>
      
      <Footer />
    </Router>
  )
}

export default App
