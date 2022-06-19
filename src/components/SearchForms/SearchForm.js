import { useEffect, useState } from 'react';
import { collection,onSnapshot } from "firebase/firestore";
import { db } from '../../config/firebase-config';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
const SearchForm = () => {

        const [data, setData] = useState([]);
        const [value, setValue] = useState("");
    useEffect(() =>{
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

    useEffect(()=>{
        if(value.length > 0){
            fetch()
        }
    }, [value])

    const trancateString = (str,num) =>{
        if(str?.length > num ){
            return str.slice(0, num) +'...';
        }else{
            return str;
        }
    }
    return (
        <>
            <div className="w-[90%] md:w-[80%] mx-auto my-20 block md:flex items-center justify-around shadow p-4 drop-shadow-sm hover:shadow-lg">
                <div className="hidden md:block">
                    <label htmlFor="">Category:</label>
                    <select name="" id="">
                        <option value="">All</option>
                        <option value="">Sports</option>
                        <option value="">Medical</option>
                        <option value="">Relaxing</option>
                    </select>
                </div>
                <div className="">
                    <input type="text" placeholder='Find a Service' className='shadow-sm px-4 py-2' onChange={(event) =>{setValue(event.target.value)}} value={value}/>
                    <button className='ml-4 border border-primary py-2 px-4 text-primary hover:shadow-lg hover:drop-shadow-md'>Search</button>
                </div>
            </div>
            <div className='text-center'>
                <h1 className='text-2xl md:text-3xl text-primary m-6'>Home Massage Services</h1>
                <h2 className='text-2xl '>What’s your mood today? Pick a service and get relaxed</h2>
            </div>
            <div className="w-[80%] my-[30px] mx-auto block md:flex flex-wrap items-center shadow p-4 drop-shadow-sm hover:shadow-lg">
                {data.map( (service) =>(
                    <div className="w-full py-[15px] px-[10px] md:w-[30%]">
                        <div className=''>
                        <Card xs={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="140"
                            image={service?.link}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div">
                            {service.name} Massage
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            {trancateString(service?.description, 150)}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small"><Link to={`${service.id}`}>Book</Link></Button>
                            <Button size="small"><Link to={`${service.id}`}>Learn More</Link></Button>
                        </CardActions>
                        </Card>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
 
export default SearchForm;