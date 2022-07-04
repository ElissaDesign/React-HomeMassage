import travel from '../../images/massage_therapists.png';
import shipping from '../../images/shipping.png';
import time from '../../images/time.png';
import StaffMembers from './StaffMembers';
import NavBar from '../../components/NavBar/NavBar';
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
        <NavBar/>
        <div className="w-[95%] md:w-4/5 mx-auto my-10 md:flex md:items-center md:justify-between shadow p-4 drop-shadow-sm hover:shadow-lg">
            <img src={travel} alt="" className='w-4/4 md:w-2/4 block mx-auto'/>
            <div className='px-0 md:px-4 '>
                <h2 className='text-xl text-primary mb-5 font-bold text-center md:text-left'>
                    NO NEED TO TRAVEL TO SPA OR <br/>
                    WAIT IN A WAITING LIST ANYMORE
                </h2>
                <p className=' text-center md:text-left text-default-300 leading-normal font-light subpixel-antialiased'>
                    Our professional massage therapist will come to your location: hotel room, house, office, beach or an apartment as soon as 30 minutes after your order or you can order our services in advance. table, sheets, massaging oils, gun massage and music are included in our service. all you need is just to relax and enjoy
                </p>
            </div>
        </div>
        <div className='w-[95%] md:w-4/5  mx-auto pt-20 shadow p-4 drop-shadow-sm hover:shadow-lg'>
            <img src={shipping} alt="" className='block mx-auto w-40 mt-10' />
            <p className='text-center my-3 text-default-300 leading-normal font-light subpixel-antialiased'>
                Massage therapists are available at the same time to provide services for couple massages, full body massage, <br/>
                 hot stone massage, relaxing massage, parties, and other events.
            </p>
            <div className='flex items-center justify-center mt-10'>
            <button className='border px-4 py-2 mt-3 md:mt-0 border-primary mx-4 text-primary hover:shadow-lg transition-shadow'><Link to="/contact">Book Now</Link></button>
            </div>
        </div>

        <StaffMembers/>

        <div className='w-[95%] md:w-4/5  mx-auto mt-20 text-center shadow p-4 drop-shadow-sm hover:shadow-lg'>
            <img src={time} alt="" className='w-10 block mx-auto ' />
            <h1 className=' text-primary text-3xl my-4'>Working Hours</h1>
            <p className='px-0 md:px-10 text-default-300 leading-normal font-light subpixel-antialiased' >Appointments are being scheduled on a first come first serve basis. Take note that our availability can also change frequently so it is best to make a reservation ahead of time</p>
            <p className='text-primary py-2 my-2 leading-normal font-light subpixel-antialiased border'>Monday-Sunday, 8:00am–20:00pm</p>
        </div>


    </>
  )
}

export default About