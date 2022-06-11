import NextToHero from '../NextToHero/NextToHero';
import HomeServices from '../HomeServices/HomeServices';
import JointHealing from '../JointHealing/JointHealing';
import ChairMassage from '../ChairMassage/ChairMassage';
import Hero from '../Hero/hero';
import AddressFooter from '../AddressFooter/AddressFooter';
import NavBar from '../NavBar/NavBar';
const Home = () => {
    return (
        <div>
            <NavBar/>
            <Hero/>
            <NextToHero/>
            <HomeServices/>
            <JointHealing/>
            <ChairMassage/>
            <AddressFooter/>
        </div>
    );
}
 
export default Home;