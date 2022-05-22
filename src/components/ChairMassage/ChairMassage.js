import Button from '../Botton/Button';
import ChairMassageImage from '../Images/chair.png'
import './ChairMassage.css';

const ChairMassage = () => {
    return (
        <div className="chair-massage-home">
            <img src={ChairMassageImage} width={400} alt="" />
            <div className="chair-massage-text">
                <h3>Chair Massage</h3>
                <p>Lörem ipsum makronera tör. Fagen parassade en bosat sav av spening. Bicentrism tida, demotion. Jän geovis. Kronde endotism. </p>
                <p className="chair-massage-last-text">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen </p>
                <Button TextButton="Book Now"/>
            </div>
        </div>
    );
}
 
export default ChairMassage;