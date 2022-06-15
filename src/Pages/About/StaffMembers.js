import girl from '../../images/girl.png'
import boy from '../../images/boy.png'
const StaffMembers = () => {
  return (
    <>
        <h1 className='text-center text-white bg-blue px-2 py2 mt-20 uppercase'>Our  Staff members</h1>
        <div className=' w-4/5 mx-auto md:flex md:items-center md:justify-center mt-10'>
            <img src={girl} alt="" className='md:w-1/4 w-2/4 block mx-auto'/>
            <div className='text-right'>
                <h1 className='md:text-left md:ml-40 text-primary font-mediun text-center text-3xl'>MUTONI Diane</h1>
                <p className='md:text-left md:ml-40 text-center'>
                    Lörem ipsum poliga kontradat och ultraryk det vill säga multise #metoo. Bektigt pas pogt. Antire keng ganing vis. Varsomhelstare posobelt. Higon dosa. 
                </p>
                <div className='text-left'>
                    <span className='fa fa-phone'></span>
                    <p>+250 780666758</p>
                </div>
            </div>
        </div>
        <div className=' w-4/5 mx-auto md:flex md:items-center md:justify-center mt-10'>
            <div className='text-right'>
                <h1 className='md:text-left  text-primary font-mediun text-center mb-2 text-3xl'>MUDAHIGWA Lucky Stanley</h1>
                <p className='md:text-left  text-center'>
                    Lörem ipsum poliga kontradat och ultraryk det vill säga multise #metoo. Bektigt pas pogt. Antire keng ganing vis. Varsomhelstare posobelt. Higon dosa. 
                </p>
                <div className='text-left'>
                    <span className='fa fa-phone'></span>
                    <p>+250 780666758</p>
                </div>
            </div>
            <img src={boy} alt="" className='md:w-1/4 w-2/4 block mx-auto'/>
        </div>
    </>
  )
}

export default StaffMembers