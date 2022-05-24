import travel from '../Images/travel.png';
import shipping from '../Images/shipping.png';
import time from '../Images/time.png';
import Button from '../Botton/Button';
import StaffMembers from './StaffMembers';
const About = () => {
  return (
    <>
        <div className="w-4/5 mx-auto my-10 md:flex md:items-center md:justify-between">
            <img src={travel} alt="" className='w-2/4'/>
            <div>
                <h2 className='text-xl text-primary mb-5 font-bold'>
                    NO NEED TO TRAVEL TO SPA OR <br/>
                    WAIT IN A WAITING LIST ANYMORE
                </h2>
                <p className='md:text-left'>
                    Our professional massage therapist will come to your location: hotel room, house, office, beach or an apartment as soon as 30 minutes after your order or you can order our services in advance. table, sheets, massaging oils, gun massage and music are included in our service. all you need is just to relax and enjoy
                </p>
            </div>
        </div>
        <div className='w-4/5  mx-auto pt-20'>
            <img src={shipping} alt="" className='block mx-auto w-40 mt-10' />
            <p>
                Massage therapists are available at the same time to provide services for couple massages, full body massage, <br/>
                 hot stone massage, relaxing massage, parties, and other events.
            </p>
            <div className='flex items-center justify-center mt-10'>
             <Button/>
            </div>
        </div>

        <StaffMembers/>

        <div className='w-4/5  mx-auto mt-20'>
            <img src={time} alt="" className='w-10 block mx-auto ' />
            <h1 className='text-center text-primary text-3xl'>Working Hours</h1>
            <p>Appointments are being scheduled on a first come first serve basis. Take note that our availability can also change frequently so it is best to make a reservation ahead of time</p>
            <p className='text-blue py-2'>monday-Sunday 8:00am–20:00pm</p>
        </div>


    </>
  )
}

export default About