import { useParams } from "react-router-dom"
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../config/firebase-config";
import { useEffect, useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import { Link } from "react-router-dom";


const PageDetails = () => {
    const { serviceId} = useParams(); 
    const [data, setData] = useState([]);
  useEffect(() =>{
        const docRef = doc(db, 'services', `${serviceId}`)
        getDoc(docRef)
        .then((doc) => {
            setData(doc.data(), doc.id);
        })
  },[])
//   console.log(data)

  return (
    <div>
        <NavBar/>
        <div className="w-[95%] md:w-[75%] mx-auto my-16">
            <div>
                <h2 className="text-center text-3xl md:text-4xl text-primary my-8">{data?.name} Massage</h2>
                <h2 className="text-center text-3xl italic my-8">Massage and Wellness ~ The Essential Balance</h2>
                <p className="mb-4 leading-7 text-center">It is not just a massage but the perfect therapy you need to rejuvenate and recoup for going about your daily routine. GharPar massage is your power house! Let us help you achieve your life goals hassle-free.</p>
            </div>
            <div>
            <img src={data.link} alt={data.name} />
            </div>
            <div className="flex items-center justify-around my-6 shadow p-4 drop-shadow-sm hover:shadow-lg bg-blue">
                <div>
                    <h2 className="text-primary mb-3">Price:</h2>
                    <h3 className="text-white">Francs(Rwf): {data?.frw}</h3>
                    <h3 className="text-white">Francs(Rwf): {data?.frw1}</h3>
                </div>
                <div>
                    <h2 className="text-primary mb-3">Time:</h2>
                    <h3 className="text-white">First:  {data?.time1}</h3>
                    <h3 className="text-white">Second:  {data?.time2}</h3>
                </div>
            </div>
            <div className="flex items-center justify-center">
                <button className="border py-2 px-5 border-primary text-primary"><Link to="/contact">Book Now</Link></button>
            </div>
            <div className="my-14 shadow p-4 drop-shadow-sm hover:shadow-lg">
                <p>{data.description}</p>
            </div>
        
        </div>
    </div>
  )
}

export default PageDetails