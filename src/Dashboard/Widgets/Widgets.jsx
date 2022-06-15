import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
const Widgets = ({ type }) => {
    return ( 
    <div className="flex flex-1 justify-between p-5 shadow-md h-[150px]">
       <div className="flex flex-col justify-between">
           <span className="">Users</span>
           <span className="text-sm border-b-[0.5px] border-gray cursor-pointer">See all users</span>
       </div>
       <div className="flex flex-col justify-between">
       <span className="text-blue">400</span>
       <PersonOutlinedIcon className='bg-blue rounded text-white'/>
       </div>

    </div> 
    );
}
 
export default Widgets;