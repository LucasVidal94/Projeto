import logo from './logo.svg';
import './App.css';
import Navbar from './componentes/section/Navbar';
import Presentation from './componentes/Presentation';
import Skills from './componentes/section/Skills';
import Projects from './componentes/section/Projects';
import Footer from './componentes/section/Footer';

function App() {
  return (
   <div className='App'>
    <Navbar/>
    <Presentation/>
    <Skills/>
    <Projects/>
    <Footer/>

    </div>

    
  );
}

export default App;
