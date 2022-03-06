import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Socialicon from './components/Social-icon';
import Works from './components/Works';
import './styles/index.scss';



function App() {
  return (
    <>
        <Navbar />
        <Sidebar />
        <Home />
        <Socialicon />
        <About />
        <Works />
        <Contact />
        <Footer />
    </>
  );
}

export default App;
