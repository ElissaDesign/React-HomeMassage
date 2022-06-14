import NextToHero from '../../components/NextToHero/NextToHero';
import HomeServices from '../../components/HomeServices/HomeServices';
import JointHealing from '../../components/JointHealing/JointHealing';
import ChairMassage from '../../components/ChairMassage/ChairMassage';
import Hero from '../../components/Hero/hero';
import AddressFooter from '../../components/AddressFooter/AddressFooter';
import NavBar from '../../components/NavBar/NavBar';
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