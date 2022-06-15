import { Navigate, Route, Routes } from "react-router-dom";
import About from "../Pages/About/About";
import Footer from "../components/Footer/Footer";
import Home from "../Pages/Home/Home";
import Services from "../components/Services/Services";
import Service from "../components/SingleService/Service";
import SocialMediaLinks from "../components/SocialMediaLinks/SocialMediaLinks";
import HomeDashboard from "../Dashboard/dashboard";
import Login from "../Pages/Login/Login";
import List from "../Dashboard/List/List";
import SingleUser from "../Dashboard/Single/SingleUser";
import NewService from "../Dashboard/New/NewService";
import ServicesDashboard from "../Dashboard/Services/ServicesDashboard";
import Orders from "../Dashboard/Orders/Orders";

const Routers = () => {

  const currentUser = true;
  const RequireAuth = ({ children}) =>{
    return currentUser ? children : <Navigate to='/' />
  };

    return (
        <>
           <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route exact path="login" element={<Login/>} />
              <Route path="about" element={<About />} />

              <Route path="services">
                <Route exact index element={<Services />} />
                <Route exact path=":serviceId" element={<Service/>} />  
              </Route>

              <Route path="dashboard">
                <Route index 
                element={ 
                <RequireAuth> 
                  <HomeDashboard /> 
                </RequireAuth> 
                } 
                />
                <Route path="orders" 
                element={
                <requireAuth>
                  <Orders />
                </requireAuth>
                } 
                />
                
                <Route path="users">
                  <Route index 
                  element={
                  <RequireAuth>
                    <List />
                  </RequireAuth>
                } 
                  />
                  <Route path=":userId" 
                  element={
                  <RequireAuth>
                    <SingleUser/>
                  </RequireAuth>
                  } 
                  />   
                </Route>
                <Route path="services">
                  <Route index element={
                  <RequireAuth>
                    <ServicesDashboard/>
                  </RequireAuth>
                  } 
                  />
                  <Route path="new" 
                  element={
                  <RequireAuth>
                    <NewService/>
                  </RequireAuth>
                  } 
                  />   
                </Route>
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