import Navbar from "../Navbar";
import Sidebar from "../Sidebar";

const SingleUser = () => {
    return ( 
    <div className="flex flex-row w-full">
       <Sidebar/>
       <div className="basis-4/5">
           <Navbar/>
       </div>
    </div> 
    );
}
 
export default SingleUser;