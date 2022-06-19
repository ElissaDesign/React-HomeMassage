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
            <div className='my-16 '>
                <div className="w-[95%] md:w-4/5 my-10 mx-auto md:flex md:items-center md:justify-between shadow p-4 drop-shadow-sm hover:shadow-lg">
                    <div className="text-center mt-5">
                    <img src={Staff} alt="" className='block mx-auto w-full md:w-2/4' />
                    <div className="mt-5">
                    <h2 className='text-primary my-4 text-center text-xl'>Exprienced Staff</h2>
                    <div className='px-0 md:px-6'>
                    <p className='text-base text-center text-default-300 leading-normal font-light subpixel-antialiased'>
                    At Massage In Rwanda, our highly skilled massage therapists service the city of Kigali. 
                    If you choose an outcall massage, our massage therapists will arrive at your home, hotel, 
                    office or wherever you would like within an hour. Massage In Stanley’s staff goes the extra 
                    mile to make you feel comfortable, relaxed and at ease. 
                    </p>
                    </div>
                    </div> 
                    </div>

                    <div className="online-booking">
                    <img src={Booking} alt="" className='block mx-auto w-full md:w-2/4' />
                    <div className="text-staff-booking">
                    <h2 className='text-primary my-4 text-center text-xl'>Booking Online</h2>
                    <div className='px-0 md:px-6'>
                    <p className='text-base text-center text-default-300 leading-normal font-light subpixel-antialiased'>
                    First, decide what type of massage is for you and we will schedule you with one 
                    of our top massage therapist. If unsure, Call or whatsapp us <span className='text-primary'>+250-789-806-310</span> for 
                    a brief consultation and a free recommendation. Your information will be held in strict 
                    confidentiality. Prior to your appointment, shower and slip on comfortable clothing or a robe. 
                    The massage table, sheets, oils, music and candles will be provided by us. You need only to relax.
                    </p>
                    </div>
                    </div>
                    </div>
                 </div>
            </div>
            
            <div className='w-[95%] md:w-[80%] mx-auto shadow p-4 drop-shadow-sm hover:shadow-lg '>
                <CardService/>
            </div>


        <div className="w-[95%] md:w-4/5 mx-auto my-10 py-10 md:flex md:items-center md:justify-center shadow p-4 drop-shadow-sm hover:shadow-lg bg-blue">
            <div className="">
                <h2 className='text-center text-primary mb-4 text-2xl font-bold'>Get Healed </h2>
                <p className='text-center md:text-left leading-normal font-light subpixel-antialiased text-white'>
                You’ve probably heard about the healing benefits of massage therapy services. In fact, there’s a huge body of medical research that supports the use of massage therapy for healthy mind and body. In addition to the “healing” aspect, people often forget about the myriad of ways bodywork therapy can enhance performance for athletes and others who need to stay in top shape to do their jobs. <br/>
                This ancient treatment also has the ability to help injured patients recover and get back on track. Finally, one of the most common forms of therapy, Swedish massage, simply aims to deliver a full-body relaxation effect for stressed muscles and minds. As licensed massage therapists, we have the potential to make every client’s life better in many different ways.
                </p>
            </div>
            <img src={Artboard} width={500} alt="" className='mt-4 md:mt-0' />
        </div>
             
            <div>
        
          <div className="w-[95%] md:w-4/5 mx-auto my-10 md:flex md:items-center md:justify-between shadow p-4 drop-shadow-sm hover:shadow-lg">
            <img src={ChairMassageImage} width={400} alt="" />
            <div className=" px-30 py-5">
                <h2 className='text-primary my-4 text-center text-2xl'>Massage Chair Remote</h2>
                <p className='text-center md:text-left text-default-300 leading-normal font-light subpixel-antialiased'>
                    A good massage chair is no longer a luxury that only a few of us can afford to use. It essentially 
                    brings the spa to you and lets you relax and unwind from the daily stress of life, in the comfort of your 
                    home. But massage chairs help with much more than “make you feel good.” And in this comprehensive guide, I’m going 
                    to tell you that but before we get into it, if you don`t know how a massage chair works here is an article that ought to help</p><br/>
                <button className='border border-primary text-primary p-2 hover:shadow-xl block mx-auto my-4'>Book now</button>
            </div>
           </div>
            </div>
            <AddressFooter/>
        </div>
    );
}
 
export default Home;