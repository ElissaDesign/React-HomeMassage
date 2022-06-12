import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import { useState } from 'react';

const NewService = () => {
    const [file, setFile] = useState("")
    console.log(file)
    return ( 
        <div className="flex flex-row w-full">
            <Sidebar/>
            <div className="basis-4/5">
                <Navbar/>
                <div className="p-5 shadow-md m-5">
                    <h1 className="text-2xl text-defaultGray">Add New Service</h1>
                </div>
                <div className="p-5 shadow-md m-5 flex">
                    <div className="basis-2/5 flex items-center justify-around">
                       <img src={file ? URL.createObjectURL(file) : "https://imgs.search.brave.com/fbHeL2V9gmsBMtxj1yepuS9z7g1iBK6vggNXzuM-Mv8/rs:fit:760:760:1/g:ce/aHR0cHM6Ly9pY29u/LWxpYnJhcnkuY29t/L2ltYWdlcy9uby1p/bWFnZS1pY29uL25v/LWltYWdlLWljb24t/MC5qcGc" } alt="" className="w-[150px] h-[150px] object-contain rounded-full" /> 
                    </div>
                    <div className="basis-3/5">
                        <form className='flex flex-wrap gap-5'>
                            <div className='w-[40%] flex items-center'>
                                <label htmlFor='file' className='cursor-pointer'>Image Upload: <DriveFolderUploadIcon/> </label>
                                <input className='w-full' type="file" id='file' style={{display: 'none'}} onChange={(e)=> setFile(e.target.files[0])}/>
                            </div>
                            <div className='w-[40%]'>
                                <label>Service Name</label>
                                <input className='w-full' type="text" placeholder="couple massage" />
                            </div>
                            <div className='w-[40%]'>
                                <label>Time it Takes</label>
                                <input className='w-full' type="text" placeholder="couple massage" />
                            </div>
                            <div className='w-[40%]'>
                                <label>Price</label>
                                <input className='w-full' type="text" placeholder="couple massage" />
                            </div>
                            <div className='w-[100%]'>
                                <label>Description</label>
                                <textarea className='w-full' name="" placeholder="Describe the Service"></textarea>
                            </div>
                            <div className='w-[100%]'>
                                <label>Addition</label>
                                <textarea className='w-full' name="" placeholder="Anything to add"></textarea>
                            </div>
                            <button className='w-[150px] bg-yellow-600 py-2 text-white rounded' type='submit'>Post</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default NewService;