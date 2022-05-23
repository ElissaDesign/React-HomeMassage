import logo from '../Images/logo.png';
import { useState } from 'react';
import './NavBar.css';

const NavBar = () => {
    const [Fix, setFix] =useState(false)
    function setFixed(){
        if(window.pageYOffset >= 90){
            setFix(true);
        }else{
            setFix(false);
        }
    }
    window.addEventListener("scroll", setFixed)
    // window.onscroll =()=> {
    //     if(window.pageYOffset >= 105){
    //         console.log(main)
    //         main.classList.add('sticky');
    //         console.log('sticky loaded')
    //     }else{
    //         main.classList.remove('sticky');
    //         console.log('sticky Unloaded')
    //     }
    // }
    return (
        <header className={Fix ? 'main-header fixed' : 'main-header'} >
            <nav>
                <a href="/"><img src={logo} width={150} alt="home-massage-logo" /></a>
                <div className="navlinks">
                    <a href="/">Home</a>
                    <a href="/services">Services</a>
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