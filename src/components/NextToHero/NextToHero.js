import './NextToHero.css';
import Staff from '../Images/staff.svg';
import Booking from '../Images/booking.svg';
const NextToHero = () => {
    return (
        <div className="staff-online-booking">
            <div className="staff">
            <img src={Staff} width={200} alt="" />
            <div className="text-staff-booking">
            <h2>Exprienced Staff</h2>
            <p>
            Lörem ipsum kroren går. Monomurat pokenad. Fysanade matsvinnsbutik minade olig. Alylig nack premäkobelt trefaledes. Pement heterosm. Du kan vara drabbad. 
            </p>
            </div>
            </div>

            <div className="online-booking">
            <img src={Booking} width={200} alt="" />
            <div className="text-staff-booking">
            <h2>Booking Online</h2>
            <p>
            Lörem ipsum kroren går. Monomurat pokenad. Fysanade matsvinnsbutik minade olig. Alylig nack premäkobelt trefaledes. Pement heterosm. Du kan vara drabbad. 
            </p>
            </div>
            </div>
        </div>
    );
}
 
export default NextToHero;