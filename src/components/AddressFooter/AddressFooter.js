import './AddressFooter.css';

const AddressFooter = () => {
    return (
        
            <div className="w-4/5 mx-auto md:flex mb:justify-around">
                <div className="md:mr-20 text-center ">
                    <h2 className='text-center md:text-left text-primary text-xl mb-4'>Lörem ipsum kaning niska </h2>
                    <p className='md:text-left'>Lörem ipsum kaning niska kvasitesm, dekajosk juligt. Monoling dys. Teplar pes i jud. Vyr enosmos. Sorejon salukudade. Du kan vara drabbad. </p>
                    <p className='md:text-left'>Lörem ipsum kaning niska kvasitesm, dekajosk juligt. Monoling dys. Teplar pes i jud. Vyr enosmos. Sorejon salukudade. Du kan vara drabbad. </p>
                </div>
                <div className="md:mr-20 mt-10 md:mt-0">
                    <h2 className="text-center md:text-left text-primary mb-10">Contact  information </h2>
                    <div className="">
                        <div className="text-center">
                            <i className="text-yellow-600 fa fa-map-marker"></i>
                            <p>Kigali-Rwanda</p>
                        </div>
                        <div className="text-center">
                            <i className="text-yellow-600 fa fa-phone"></i>
                            <p>+250  780 532 987</p>
                        </div>
                        <div className="text-center ">
                            <i className="text-yellow-600 fa fa-whatsapp"></i>
                            <p>+250  780 532 987</p>
                        </div>
                        <div className="text-center">
                            <i className="text-yellow-600 fa fa-envelope"></i>
                            <p>homemassagerwanda@gmail.com</p>
                        </div>
                    </div>
                </div>
        </div>
    );
}
 
export default AddressFooter;