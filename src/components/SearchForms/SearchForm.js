import './SearchForm.css';
import { data } from '../data';

const SearchForm = () => {
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
            <div className="all-services-container">
                {data.map( (service) =>(
                    <div className="multiple-service-Container">
                        <img src={service.image} alt="" />
                        <h3>{service.name}</h3>
                        <p>{service.summary}</p>
                        <div className="multiple-price-time">
                        <p>Price: {service.price}</p>
                        <p>Time: {service.time}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
 
export default SearchForm;