import { useEffect, useState } from 'react';
import { collection,onSnapshot } from "firebase/firestore";
import { db } from '../../config/firebase-config';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Grid } from '@mui/material';
import { Autoplay, Pagination } from 'swiper';

const ServiceC = () => {

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

  const trancateString = (str,num) =>{
    if(str?.length > num ){
        return str.slice(0, num) +'...';
    }else{
        return str;
    }
}


    return ( 
      <div className='block md:flex items-start'>
        <Swiper
          breakpoints={{
            // when window width is >= 640px
            640: {
              width: 640,
              slidesPerView: 1,
            },
            // when window width is >= 768px
            768: {
              width: 768,
              slidesPerView: 2,
            },
          }}
          spaceBetween={30}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            }}
          pagination={{
            clickable: true,
              }}
          modules={[Autoplay,Pagination]}
          className="mySwiper"
            >
            {data.map((service, key) =>(
              <SwiperSlide>
                <Grid>
              <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            M
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        
        title={`${service.name} Massage`}
        subheader="September 14, 2016"
      />
      <Link 
      to={`services/${service.id}`}
        component="button"
        variant="body2"
        onClick={() => {
          console.info("I'm a button.");
        }}
      >
       <CardMedia
        component="img"
        height="194"
        image={service.link}
        alt=""
      />
      </Link>
      
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {trancateString(service?.description, 150)}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
    </Grid>
        </SwiperSlide>
        ))}
       </Swiper>
      </div>
    );
}
 
export default ServiceC;