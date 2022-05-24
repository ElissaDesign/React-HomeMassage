import Staff from '../Images/staff.svg';
import Booking from '../Images/booking.svg';
const NextToHero = () => {
    return (
        <div className="w-4/5 my-10 mx-auto md:flex md:items-center md:justify-between">
            <div className="text-center mt-5">
            <img src={Staff} alt="" className='block mx-auto w-full md:w-2/4' />
            <div className="mt-5">
            <h2 className='text-primary my-4 text-center'>Exprienced Staff</h2>
            <p className='text-base'>
            Lörem ipsum kroren går. Monomurat pokenad. Fysanade matsvinnsbutik minade olig. Alylig nack premäkobelt trefaledes. Pement heterosm. Du kan vara drabbad. 
            </p>
            </div>
            </div>

            <div className="online-booking">
            <img src={Booking} alt="" className='block mx-auto w-full md:w-2/4' />
            <div className="text-staff-booking">
            <h2 className='text-primary my-4 text-center'>Booking Online</h2>
            <p className='text-base'>
            Lörem ipsum kroren går. Monomurat pokenad. Fysanade matsvinnsbutik minade olig. Alylig nack premäkobelt trefaledes. Pement heterosm. Du kan vara drabbad. 
            </p>
            </div>
            </div>
        </div>
    );
}
 
export default NextToHero;