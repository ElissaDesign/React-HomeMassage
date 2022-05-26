import NavBar from './components/NavBar/NavBar'
import SocialMediaLinks from './components/SocialMediaLinks/SocialMediaLinks'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import About from './components/About/About';
import HomeDashboard from './components/Dashboard/HomeDashboard/HomeDashboard'
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
        <>
          <NavBar/>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/services" element={<Services />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/dashboard" element={< HomeDashboard/>} />
          </Routes>
          <footer>
            <SocialMediaLinks/>
            <Footer/>
          </footer>
        </>
  );
}

export default App;
