import Button from '../Botton/Button';
import ChairMassageImage from '../Images/chair.png'

const ChairMassage = () => {
    return (
        <>
        <hr/>
        <div className="w-4/5 mx-auto my-10 md:flex md:items-center md:justify-between">
            <img src={ChairMassageImage} width={400} alt="" />
            <div className="px-30 py-5">
                <h2 className='text-primary my-4 text-center text-xl'>Chair Massage</h2>
                <p>Lörem ipsum makronera tör. Fagen parassade en bosat sav av spening. Bicentrism tida, demotion. Jän geovis. Kronde endotism. </p>
                <p className="mb-50">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen </p>
                <Button TextButton="Book Now"/>
            </div>
        </div>
        </>
    );
}
 
export default ChairMassage;