import { useParams } from "react-router-dom"
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../config/firebase-config";
import { useEffect, useState } from "react";
import NavBar from "../../components/NavBar/NavBar";

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
  console.log(data)

  return (
    <div>
        <NavBar/>
        <div className="w-[75%] mx-auto my-16">
            <div>
                <h2 className="text-center text-4xl text-primary my-8">{data.name} Massage</h2>
                <h2 className="text-center text-3xl italic my-8">Massage and Wellness ~ The Essential Balance</h2>
                <p className="mb-4 leading-7">It is not just a massage but the perfect therapy you need to rejuvenate and recoup for going about your daily routine. GharPar massage is your power house! Let us help you achieve your life goals hassle-free.</p>
            </div>
            <div>
            <img src={data.link} alt=" hello" />
            </div>
            <div>
                <div>
                    <h3>Price:</h3>
                </div>
                <div>
                    <h3>Time:</h3>
                </div>
            </div>
            <div className="flex items-center justify-center">
                <button className="border py-2 px-5 border-primary text-primary">Book Now</button>
            </div>
            <div className="my-14">
                <p>{data.description}</p>
            </div>
        
        </div>
    </div>
  )
}

export default PageDetails