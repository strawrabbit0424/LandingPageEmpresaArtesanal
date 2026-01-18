import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'

function App() {
  return (
    <Router>
      {/* Header siempre visible */}
      <Header />
      
      {/* Contenido que cambia según la ruta */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      
      {/* Footer siempre visible */}
      <Footer />
    </Router>
  )
}

export default App
