import './App.css'
import Aboutme from './component/Aboutme'
import Contact from './component/Contact'
import Footer from './component/Footer'
import Landing from './component/Landing'
import Navbar from './component/Navbar'

/* import Projects from './component/Projects' */

function App() {

  return (
      <div className='flex flex-col overflow-hidden'>
      <Navbar></Navbar> {/* add animation */}
      <section id='home'>
      <Landing></Landing> {/* add some animation*/}
      </section>
      <section id='about'>
      <Aboutme></Aboutme> 
      </section>
     {/*add  <Projects></Projects> */}
     <section id='contact'>
     <Contact></Contact>    {/*store the message somehow */}
     </section>
      <Footer></Footer> 
    </div>
  )
}

export default App
