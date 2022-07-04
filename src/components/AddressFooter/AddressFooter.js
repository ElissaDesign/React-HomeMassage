import './AddressFooter.css';

const AddressFooter = () => {
    return (
        
            <div className="w-[95%] md:w-4/5 mx-auto md:flex mb:justify-around shadow p-4 drop-shadow-sm hover:shadow-lg">
                <div className="md:mr-20 text-center text-default-300 leading-normal font-light subpixel-antialiased">
                    <h2 className='text-center md:text-left text-primary text-xl mb-4 font-bold'>Get In Touch </h2>
                    <p className='md:text-left text-default-300 '>Worldwide by Stanley, H.M.R is happy to offer mobile massage services only in Kigali-Rwanda. Our staff of professionally trained and licensed massage therapists come prepared with all necessary equipment such as massage chair Remote, table, clean sheets, lotion, etc. to conduct the massage session to give you a therapeutic service to help promote health and wellness. Male and female massage therapists available upon request.</p>
                </div>
                <div className="md:mr-20 mt-10 md:mt-0">
                    <h2 className="text-center md:text-left text-primary mb-10">Contact  information </h2>
                    <div className="text-default-300 leading-normal font-light subpixel-antialiased">
                        <div className="text-center">
                            <i className="text-yellow-600 fa fa-map-marker"></i>
                            <p>Kigali-Rwanda</p>
                        </div>
                        <div className="text-center">
                            <i className="text-yellow-600 fa fa-phone"></i>
                            <p>+250 789 806 310</p>
                        </div>
                        <div className="text-center ">
                            <i className="text-yellow-600 fa fa-whatsapp"></i>
                            <p>+250 789 806 310</p>
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