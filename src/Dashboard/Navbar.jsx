import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
const navbar = () => {
  return (
    <div className="h-[60px] border-b-[0.5px] border-gray flex items-center text-base">
      <div className='w-full p-[20px] flex items-center justify-between'>
        <div className='flex items-center border-[0.5px] border-gray'>
          <input type="text" placeholder="Search..." className='border-none outline-none bg-transparent p-1'/>
          <SearchIcon/>
        </div>

        <div className='flex items-center relative'>
          <div className='flex items-center mr-6'>
            <NotificationsNoneOutlinedIcon/>
            <div className='w-[15px] h-[15px] bg-primary rounded-full text-white flex items-center justify-center text-sm absolute t-0 r-0'>2</div>
          </div>
          <div className='flex items-center mr-6'>
            <div className='w-[15px] h-[15px] bg-primary rounded-full text-white flex items-center justify-center text-sm absolute t-0 r-0'>2</div>
            <ChatBubbleOutlineOutlinedIcon/>
          </div>
          <div className='flex items-center mr-6'>
            <FormatListBulletedOutlinedIcon/>
          </div>
          <div className='flex items-center mr-6'>
            <img 
            src="https://images.pexels.com/photos/4940431/pexels-photo-4940431.jpeg" 
            alt="" 
            className='w-[40px] h-[40px] rounded-full cursor-pointer'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default navbar