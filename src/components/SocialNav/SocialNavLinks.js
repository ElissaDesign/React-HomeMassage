const SocialNav = () => {
    return (
        <div className="hidden md:flex md:item-center md:justify-between md:w-80% mx-20 my-auto">
            <div className= "flex py-3 items-center justify-around ">
                <i className="text-xs mr-2 md:text-sm fa text-yellow-600 fa-map-marker "></i>
                <p className='text-xs sm:text-sm md:text-base'> Kigali/Rwanda</p>
            </div>
            <div className= " flex py-3 items-center justify-around ">
                <i className="text-xs mr-2 md:text-sm fa text-yellow-600 fa-phone "></i>
                <p className='text-xs sm:text-sm md:text-base'>+250-780-666-758</p>
            </div>
            <div className= "hidden md:flex py-3 sm:items-center justify-around ">
                <i className="text-xs mr-2 md:text-sm fa text-yellow-600 fa-clock-o "></i>
                <p  className='text-xs sm:text-sm md:text-base'>mon-Sun 8:00am–20:00pm</p>
            </div>
        </div>
    );
}
 
export default SocialNav;