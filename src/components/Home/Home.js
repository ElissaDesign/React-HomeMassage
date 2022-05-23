import NextToHero from '../NextToHero/NextToHero';
import HomeServices from '../HomeServices/HomeServices';
import JointHealing from '../JointHealing/JointHealing';
import ChairMassage from '../ChairMassage/ChairMassage';
import Hero from '../Hero/hero';
import AddressFooter from '../AddressFooter/AddressFooter';
const Home = () => {
    return (
        <div>
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