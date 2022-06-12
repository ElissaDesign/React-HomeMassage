import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import TableMsg from "../Tables/TableMsg";

const Orders = () => {
    return ( 
        <div className="flex flex-row w-full">
            <Sidebar/>
            <div className="basis-4/5">
                <Navbar/>
                <TableMsg/>
            </div>
        </div>
     );
}
 
export default Orders;