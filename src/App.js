import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import SocialMediaLinks from './components/SocialMediaLinks/SocialMediaLinks';

function App() {
  return (
      <>
          <header>
          <NavBar/>
          </header>
          <div className="Content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
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
