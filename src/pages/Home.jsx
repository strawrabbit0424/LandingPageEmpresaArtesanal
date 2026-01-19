import Hero from '../components/Hero'
import Services from '../components/Services'
import About from '../components/About'
import Proyects from '../components/Proyects'
import Process from '../components/Process'

function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <Proyects/>
      <Process/>
      <About />
    </div>
  )
}

export default Home