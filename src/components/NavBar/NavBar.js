import logo from '../Images/logo.png';
import './NavBar.css';

const NavBar = () => {
    return (
        <header className="main-header">
            <nav>
                <a href="/"><img src={logo} width={150} alt="home-massage-logo" /></a>
                <div className="navlinks">
                    <a href="/">Home</a>
                    <a href="/Services">Services</a>
                    <a href="/About">About</a>
                    <a href="/Contact">Contact</a>
                    <a href="/Signin">Sign in</a>
                    <a href="/Demo" className='Demo'>Get Demo</a>
                </div>
            </nav>
        </header>
    );
}
 
export default NavBar;