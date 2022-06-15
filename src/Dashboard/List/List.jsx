import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import TableUsers from "../Tables/TableUsers";

const List = () => {
    return ( 
        <div className="flex flex-row w-full">
            <Sidebar/>
            <div className="basis-4/5">
                <Navbar/>
                <TableUsers/>
            </div>
        </div>
     );
}
 
export default List;