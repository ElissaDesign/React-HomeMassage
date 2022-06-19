import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../config/firebase-config";



const Hero = () => {

    const [data, setData] = useState([]);
    const images = data[Math.floor(Math.random()* data.length)]
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
        <div className= "w-full h-[650px] text-white">
            <div className="absolute w-full h-[650px] bg-gradient-to-r from-black"></div>
            <div className="w-full h-full">
                <img className="w-full h-full object-cover" src={images?.link} alt={images?.name} />
            </div>
            <div className="absolute w-full top-[30%] p-4 md:p-8">
                <h1 className="text-3xl md:text-5xl font-bold mb-4">{images?.name} Massage</h1>
                <div>
                <button className="border bg-gray text-black hover:text-yellow-600 border-gray py-2 px-5">Learn More</button>
                <button className="border text-white border-gray hover:border-yellow-600 py-2 px-5 ml-4">Book Now</button>
                </div>
                <p className="md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray pt-2 mt-2">{trancateString(images?.description, 150)}</p>
            <div className="hidden md:block w-full text-left md:w-[50%] mt-20 md:text-center mx-auto">
              <p>Hello dear clients 🇷🇼 we are here for you no need to travel to spa anymore , home massage rwanda serve you to your location in a way of treatment & distress you and your family . For special parties 🎉 🎊 🥳 you may surprise them with Massage service to sustain your life and relatives</p>
            </div>
            </div>
            
           
        </div>
    );
}
 
export default Hero;