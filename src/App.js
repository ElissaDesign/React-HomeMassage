import './App.css';
import SocialNav from './components/SocialNav/SocialNavLinks'
import NavBar from './components/NavBar/NavBar';
import Hero from './components/Hero/hero';
import NextToHero from './components/NextToHero/NextToHero';
import HomeServices from './components/HomeServices/HomeServices';
import JointHealing from './components/JointHealing/JointHealing';
import ChairMassage from './components/ChairMassage/ChairMassage';
import AddressFooter from './components/AddressFooter/AddressFooter';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
     <header>
     <SocialNav/>
     <NavBar/>
     <Hero/>
     </header>
     <div className="Content">
       <NextToHero/>
       <HomeServices/>
       <JointHealing/>
       <ChairMassage/>
     </div>
     <footer>
       <AddressFooter/>
       <Footer/>
     </footer>
    </div>
  );
}

export default App;
