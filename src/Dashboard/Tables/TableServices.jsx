import { DataGrid } from '@mui/x-data-grid';
import { userColumns } from "../../DatabaseUser";
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import { collection, getDocs, doc, deleteDoc, onSnapshot } from "firebase/firestore";
import { db } from '../../config/firebase-config';


const TableServices = () => {
    const [data, setData] = useState([]);
    useEffect(() =>{
      // const fetchData = async() =>{
      //   let list =[];
      //   try {
      //     const querySnapshot = await getDocs(collection(db, "services"));
      //     querySnapshot.forEach((doc) => {
      //       list.push({id: doc.id, ...doc.data()})
      //       console.log(doc.id, " => ", doc.data());
      //     });
      //     setData(list)
      //   } catch (error) {
      //     console.log(error)
      //   }
        

      // }
      // fetchData();

      // LISTEN REALTIME
      const unsub = onSnapshot(collection(db, "services"), (snapshot) => {
        let list =[];
        snapshot.docs.forEach(doc =>{
          list.push({id:doc.id, ...doc.data() });
        });
        setData(list)
      },(error) =>{
        console.log(error)
      });

      return () => {
        unsub();
      }
    },[])
    console.log(data)


    const handleDelete = async(id) =>{
      try {
        await deleteDoc(doc(db, "services", id));
        setData(data.filter((item) => item.id !== id))
      } catch (error) {
        console.log(error)
      }
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