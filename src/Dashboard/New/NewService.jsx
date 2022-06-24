import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import { useEffect, useState } from 'react';
import { addDoc, collection, serverTimestamp} from "firebase/firestore"; 
import { db, storage } from '../../config/firebase-config';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useNavigate } from 'react-router-dom';


const NewService = () => {
    const [file, setFile] = useState('');
    const [link, setLink] = useState('');
    const [name, setName] = useState("");
    const [time1, setTime1] = useState("");
    const [time2, setTime2] = useState("");
    const [dollar, setDollar] = useState("");
    const [frw, setFrw] = useState("");
    const [frw1, setFrw1] = useState("");
    const [description, setDescription] = useState("");
    const [addition, setAddition] = useState("");
    const [per, setPer] = useState(null);
    const navigate = useNavigate()

    useEffect(() => {
    const uploadFile = () => {
      const name = new Date().getTime() + file.name;

      console.log(name);
      const storageRef = ref(storage, file.name);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          setPer(progress);
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              const Link = downloadURL;
            setLink(Link);
          });
        }
      );
    };
    file && uploadFile();
  }, [file]);

  console.log(link)

    const handleAdd = async(e) =>{
        e.preventDefault()
       try {
        const res = await addDoc(collection(db, "services"), {
            name,
            link,
            time1,
            time2,
            dollar,
            frw,
            frw1,
            description,
            addition,
            timestamp: serverTimestamp()
          });
          navigate(-1);
       } catch (error) {
           console.log(error)
       }
    }
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
                    <img src={file ? URL.createObjectURL(file) : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg" } className=" w-[200px] rounded-full object-cover"/> 
                    </div>
                    <div className="basis-3/5">
                        <form className='flex flex-wrap gap-5' onSubmit={handleAdd}>
                            <div className='w-[40%] flex items-center'>
                                <label htmlFor='file' className='cursor-pointer'>Image Upload: <DriveFolderUploadIcon/> </label>
                                <input className='w-full' type="file" id='file' style={{display: 'none'}} onChange={(e)=> setFile(e.target.files[0])}/>
                            </div>
                            <div className='w-[40%]'>
                                <label>Service Name</label>
                                <input className='w-full text-defaultGray' type="text" placeholder="couple massage" onChange={e =>setName(e.target.value)}/>
                            </div>
                            <div className='w-[40%]'>
                                <label>Time it Takes[ 1 ]</label>
                                <input className='w-full text-defaultGray' type="text" placeholder="couple massage" onChange={e =>setTime1(e.target.value)}/>
                            </div>
                            <div className='w-[40%]'>
                                <label>Time it Takes[ 2 ]</label>
                                <input className='w-full text-defaultGray' type="text" placeholder="couple massage" onChange={e =>setTime2(e.target.value)}/>
                            </div>
                            <div className='w-[40%]'>
                                <label>Price[FRW~1]</label>
                                <input className='w-full text-defaultGray' type="text" placeholder="couple massage" onChange={e =>setFrw(e.target.value)}/>
                            </div>
                            <div className='w-[40%]'>
                                <label>Price[FRW~2]</label>
                                <input className='w-full text-defaultGray' type="text" placeholder="couple massage" onChange={e =>setFrw1(e.target.value)}/>
                            </div>
                            <div className='w-[100%]'>
                                <label>Description</label>
                                <textarea className='w-full text-defaultGray' name="" placeholder="Describe the Service" onChange={e =>setDescription(e.target.value)}></textarea>
                            </div>
                            <div className='w-[100%]'>
                                <label>Addition</label>
                                <textarea className='w-full text-defaultGray' name="" placeholder="Anything to add" onChange={e =>setAddition(e.target.value)}></textarea>
                            </div>
                            <button disabled={per !== null && per < 100} className='w-[150px] bg-yellow-600 py-2 text-white rounded' type='submit'>Post</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default NewService;