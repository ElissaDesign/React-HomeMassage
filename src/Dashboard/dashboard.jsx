import Navbar from '../Dashboard/Navbar'
import Sidebar from './Sidebar'
import Widgets from './Widgets/Widgets'
import Table from './Tables/TableMsg'

const dashboard = () => {
  return (
    <div className='flex flex-row w-full'>
        <Sidebar/>
        <div className='basis-4/5'>
          <Navbar/>
          <div className='flex gap-4 p-6'>
            <Widgets type='users'/>
            <Widgets type='services'/>
            <Widgets type='orders'/>
            <Widgets type='notifications'/>
          </div>
          <div className='p-5 shadow-md m-5 '>
            <div className=' text-xl text-defaultGray m-5 '>Latest Bookings</div>
            <Table/>
          </div>
        </div>
    </div>
  )
}

export default dashboard