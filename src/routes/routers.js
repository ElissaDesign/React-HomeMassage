import { Route, Routes } from "react-router-dom";
import About from "../components/About/About";
import Footer from "../components/Footer/Footer";
import Home from "../components/Home/Home";
import Services from "../components/Services/Services";
import Service from "../components/SingleService/Service";
import SocialMediaLinks from "../components/SocialMediaLinks/SocialMediaLinks";
import HomeDashboard from "../Dashboard/dashboard";
import Login from "../components/Login/Login";
import List from "../Dashboard/List/List";
import SingleUser from "../Dashboard/Single/SingleUser";
import NewService from "../Dashboard/New/NewService";

const Routers = () => {
    return (
        <>
           <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="login" element={<Login/>} />
              <Route path="about" element={<About />} />

              <Route path="services">
                <Route index element={<Services />} />
                <Route path=":serviceId" element={<Service/>} />  
              </Route>

              <Route path="dashboard">
                <Route index element={<HomeDashboard />} />
                <Route path="users">
                  <Route index element={<List />} />
                  <Route path=":userId" element={<SingleUser/>} />   
                </Route>
                <Route path="new" exact element={<NewService/>} /> 
              </Route>
              

              
            </Route>
           </Routes>
          <footer>
            <SocialMediaLinks/>
            <Footer/>
          </footer> 
        </>
    );
}
 
export default Routers;