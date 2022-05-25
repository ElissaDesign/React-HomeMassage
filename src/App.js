import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import SocialMediaLinks from './components/SocialMediaLinks/SocialMediaLinks';
import About from './components/About/About';

function App() {
  return (
      <>
          <header>
          <NavBar/>
          </header>
          <div className="Content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/services" element={<Services />} />
            <Route exact path="/about" element={<About />} />
          </Routes>
          </div>
          <footer>
            <SocialMediaLinks/>
            <Footer/>
          </footer>
      </>
  );
}

export default App;
