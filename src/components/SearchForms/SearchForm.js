import './SearchForm.css';
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
import { Grid } from '@mui/material';

const SearchForm = () => {

        const [data, setData] = useState([]);
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
    return (
        <>
            <div className="form-containers">
                <div className="category">
                    <label htmlFor="">Category:</label>
                    <select name="" id="">
                        <option value="">All</option>
                        <option value="">Sports</option>
                        <option value="">Medical</option>
                        <option value="">Relaxing</option>
                    </select>
                </div>
                <div className="search">
                    <input type="text" placeholder='Find a Service'/>
                    <button>Search</button>
                </div>
            </div>
            <div className='text-center'>
                <h1 className='text-4xl text-primary m-6'>Home Massage Services</h1>
                <h2 className='text-2xl '>What’s your mood today? Pick a service and get relaxed</h2>
            </div>
            <div className="all-services-container">
                {data.map( (service) =>(
                    <div className="multiple-service-Container">
                        <Grid>
                        <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="140"
                            image={service.link}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            Lizard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small"><Link to={`${service.id}`}>Book</Link></Button>
                            <Button size="small"><Link to={`${service.id}`}>Learn More</Link></Button>
                        </CardActions>
                        </Card>
                        </Grid>
                    </div>
                ))}
            </div>
        </>
    );
}
 
export default SearchForm;