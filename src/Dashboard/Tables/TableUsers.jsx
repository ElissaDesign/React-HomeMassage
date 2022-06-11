import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from "../../DatabaseUser";
import { Link } from "react-router-dom";

const TableUsers = () => {
    const actionColumn = [
        {
          field: "action",
          headerName: "Action",
          width: 200,
          renderCell: (params) => {
            return (
              <div className="flex items-center gap-5">
                <Link to="/users/test" style={{ textDecoration: "none" }}>
                  <div className="p-y-[5px] p-x-[2px] text-blue rounded border-[1px] border-blue">View</div>
                </Link>
                <div
                  className="p-y-[5px] p-x-[2px] text-crimson rounded border-[1px] border-crimson"
                  
                >
                  Delete
                </div>
              </div>
            );
          },
        },
      ];
    return ( 
        <div className='h-[800px] w-[100%]'>
           <DataGrid
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
        </div>
     );
}
 
export default TableUsers;