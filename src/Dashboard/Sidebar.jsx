import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import LogoutIcon from '@mui/icons-material/Logout';
const Sidebar = () => {
  return (
      <div className="basis-1/5 border-r-[0.5px] min-h-screen border-gray">
        <div>
            <h2 className="text-xl text-center text-blue p-4">Dashboard</h2>
            <hr className="h-0 border-[0.5px] border-gray"/>
        </div>
        <div className="pl-6">
            <ul className="p-0 m-0">
              <li className='flex items-center p-3 mt-4 cursor-pointer hover:bg-primary'>
                <DashboardIcon className="text-lg text-blue"/>
                <span className='ml-5'>Dashboard</span>
              </li>

              <li className='flex items-center p-3 mt-4 cursor-pointer hover:bg-primary'>
                <PersonIcon className="text-lg text-blue"/>
                <span className='ml-5'>Users</span>
              </li>

              <li className='flex items-center p-3 mt-4 cursor-pointer hover:bg-primary'>
                <MedicalInformationIcon className="text-lg text-blue"/>
                <span className='ml-5'>Services</span>
              </li>

              <li className='flex items-center p-3 mt-4 cursor-pointer hover:bg-primary'>
                <CreditCardIcon className="text-lg text-blue"/>
                <span className='ml-5'>Orders</span>
              </li>

              <li className='flex items-center p-3 mt-4 cursor-pointer hover:bg-primary'>
                <NotificationsActiveIcon className="text-lg text-blue"/>
                <span className='ml-5'>Notifications</span>
              </li>

              <li className='flex items-center p-3 mt-4 cursor-pointer hover:bg-primary'>
                <LogoutIcon className="text-lg text-blue"/>
                <span className='ml-5'>LogOut</span>
              </li>
            </ul>
        </div>
      </div>
  )
}

export default Sidebar