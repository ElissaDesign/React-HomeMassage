import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from "../../DatabaseUser";
import { Link } from "react-router-dom";
import { useState } from 'react';

const TableServices = () => {
    const [data, setData] = useState(userRows);
    const handleDelete = (id) =>{
        setData(data.filter((item) => item.id !== id))
    }
    const actionColumn = [
        {
          field: "action",
          headerName: "Action",
          width: 200,
          renderCell: (params) => {
            return (
              <div className="flex items-center gap-5">
                <Link to="/users/test" style={{ textDecoration: "none" }}>
                  <div className="py-[5px]px[2px] text-blue rounded border-[1px] border-blue">View</div>
                </Link>
                <div
                  className="py-[5px]px[2px] text-primary rounded border-[1px] border-primary cursor-pointer"
                  onClick={() => handleDelete(params.row.id)}
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
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
        </div>
     );
    }
 
export default TableServices;