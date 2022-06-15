import Hero from '../../components/Hero/hero';
import AddressFooter from '../../components/AddressFooter/AddressFooter';
import NavBar from '../../components/NavBar/NavBar';
import CardService from '../../components/CardService/CardService';
import Staff from '../../images/staff.svg';
import Booking from '../../images/booking.svg';
import ChairMassageImage from '../../images/chair.png'
import Artboard from '../../images/Artboard-1.png'
const Home = () => {
    return (
        <div>
            <NavBar/>
            
            <Hero/>
            <div className='my-16'>
                <div className="w-4/5 my-10 mx-auto md:flex md:items-center md:justify-between">
                    <div className="text-center mt-5">
                    <img src={Staff} alt="" className='block mx-auto w-full md:w-2/4' />
                    <div className="mt-5">
                    <h2 className='text-primary my-4 text-center'>Exprienced Staff</h2>
                    <div className='px-6'>
                    <p className='text-sm text-defaultGray'>
                    Lörem ipsum kroren går. Monomurat pokenad. Fysanade matsvinnsbutik minade olig. Alylig nack premäkobelt trefaledes. Pement heterosm. Du kan vara drabbad. 
                    </p>
                    </div>
                    </div> 
                    </div>

                    <div className="online-booking">
                    <img src={Booking} alt="" className='block mx-auto w-full md:w-2/4' />
                    <div className="text-staff-booking">
                    <h2 className='text-primary my-4 text-center'>Booking Online</h2>
                    <div className='px-6'>
                    <p className='text-sm text-defaultGray'>
                    Lörem ipsum kroren går. Monomurat pokenad. Fysanade matsvinnsbutik minade olig. Alylig nack premäkobelt trefaledes. Pement heterosm. Du kan vara drabbad. 
                    </p>
                    </div>
                    </div>
                    </div>
                 </div>
            </div>
            
            <div className='w-[80%] mx-auto'>
                <CardService/>
            </div>


            <div className=" w-4/5 mx-auto my-10 py-10 md:flex md:items-center md:justify-center">
            <div className="">
                <h2 className='text-center text-primary text-xl uppercase mb-4'>Get Healed </h2>
                <p>
                    Lörem ipsum makronera tör. Fagen parassade en bosat sav av spening. Bicentrism tida, demotion. Jän geovis. Kronde endotism.<br /> <br /> 
                    Lörem ipsum makronera tör. Fagen parassade en bosat sav av spening. Bicentrism tida, demotion. Jän geovis. Kronde endotism.
                </p>
            </div>
            <img src={Artboard} width={500} alt="" />
        </div>
             
            <div>
            <hr/>
          <div className="w-4/5 mx-auto my-10 md:flex md:items-center md:justify-between">
            <img src={ChairMassageImage} width={400} alt="" />
            <div className=" px-30 py-5">
                <h2 className='text-primary my-4 text-center text-xl'>Chair Massage</h2>
                <p>Lörem ipsum makronera tör. Fagen parassade en bosat sav av spening. Bicentrism tida, demotion. Jän geovis. Kronde endotism. </p>
                <p className="mb-50">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen </p>
                <button className='bg-primary p-2 rounded-sm'>Book now</button>
            </div>
           </div>
            </div>
            <AddressFooter/>
        </div>
    );
}
 
export default Home;