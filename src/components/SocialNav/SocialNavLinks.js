import "./SocialNav.css";
const SocialNav = () => {
    return (
        <div className="social-nav">
            <div className= "location">
                <i class="fa fa-map-marker"></i>
                <p>Kigali/Rwanda</p>
            </div>
            <div className= "location">
                <i class="fa fa-phone"></i>
                <p>+250-780-666-758</p>
            </div>
            <div className= "location">
                <i class="fa fa-clock-o"></i>
                <p>mon-Sun 8:00am–20:00pm</p>
            </div>
        </div>
    );
}
 
export default SocialNav;