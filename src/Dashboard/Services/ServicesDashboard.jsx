import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import TableServices from "../Tables/TableServices";

const ServicesDashboard = () => {
    return ( 
        <div className="flex flex-row w-full">
            <Sidebar/>
            <div className="basis-4/5">
                <Navbar/>
                <TableServices/>
            </div>
        </div>
     );
}
 
export default ServicesDashboard;