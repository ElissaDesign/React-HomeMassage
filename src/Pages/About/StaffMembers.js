import boy from '../../images/boy.png';
import girl from '../../images/diane.png';

import { Link } from "react-router-dom";
const StaffMembers = () => {
  return (
    <>
        <h1 className='text-center text-white bg-primary px-2 py2 mt-20 uppercase text-2xl'>Our  Staff members</h1>
        <div className=''>
        <div className='w-[95%] md:w-4/5 mx-auto md:flex md:items-center md:justify-center mt-10 shadow p-4 drop-shadow-sm hover:shadow-lg text-default-300 leading-normal font-light subpixel-antialiased'>
            <img src={girl} alt="" className='md:w-1/4 w-3/4 block mx-auto'/>
            <div className='block'>
                <h1 className='md:text-left md:ml-40 text-primary font-mediun text-center text-3xl my-2'>MUTONI Diane</h1>
                <p className='md:text-left md:ml-40 text-center text-default-300'>
                Mutoni Diane in Physical Therapy from Makines H.T.C (Makines Vocational Training Center)  in 2018. Here in home massage Rwanda to serve you troughs your massage appointment as we are offering mobile massage services here in Kigali Rwanda. For clients who prefer being served by female therapist, therapist Diane she really ready to serve you any time.
                <br/>
                Just remember to book now for your massage appointment. 
                </p>
                <div className='block text-center md:text-right md:ml-40 md:flex items-center my-6 text-white'>
                    <div className='flex items-center justify-center'>
                    <span className='fa fa-phone'></span>
                    <p className='mx-2'>+250 789 806 310</p>
                    </div>
                    <button className='border px-4 py-2 mt-3 md:mt-0 border-white mx-4 hover:text-yellow hover:border-yellow-600 transition-shadow'><Link to="/contact">Book Now</Link></button>
                </div>
            </div>
        </div>
        </div>
        <div className='w-[95%] md:w-4/5 mx-auto md:flex md:items-center md:justify-center mt-10 shadow p-4 drop-shadow-sm hover:shadow-lg text-default-300 leading-normal font-light subpixel-antialiased'>
            <div className='text-right px-2 md:px-6'>
                <h1 className='md:text-left  text-primary font-mediun text-center mb-2 text-3xl'>MUDAHIGWA Lucky Stanley</h1>
                <p className='md:text-left  text-center'>
                The Director & founder of Home Massage Rwanda since 2017 in Kigali. Therapist Lucky Stanley MUDAHIGWA certified and experienced in Medical massage services sport massages, prenatal massages.
                <br/>
                And offer (outreach) mobile services in Kigali Rwanda interesting news is to save the time and money of our clients. No need to travel to spa any more!!
                <br/>
                Lucky Stanley always appreciate to support the world through the healing of patients , am the back pain removal, stress removal…….
                </p>
                <div className='block text-center md:text-left md:flex items-center my-6'>
                    <div className='flex items-center justify-center'>
                    <span className='fa fa-phone'></span>
                    <p className='mx-2'>+250 789 806 310</p>
                    </div>
                    <button className='border px-4 py-2 mt-3 md:mt-0 border-primary mx-4 text-primary hover:shadow-lg transition-shadow text-sm'><Link to="/contact">Book Now</Link></button>

                </div>
            </div>
            <img src={boy} alt="" className='md:w-1/4 w-2/4 block mx-auto'/>
        </div>
    </>
  )
}

export default StaffMembers