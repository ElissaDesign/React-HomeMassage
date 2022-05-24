import logo from '../Images/logo.png';
import { useState } from 'react';
import SocialNav from '../SocialNav/SocialNavLinks';

const NavBar = () => {
    const Links =[
        {name: 'Home', link:'/'},
        {name: 'Services', link:'/services'},
        {name: 'About', link:'/about'},
        {name: 'Contact', link:'/contact'},
        {name: 'SignIn', link:'/signin'},
    ]
    let [open, setOpen] =useState(false)
    const [Fix, setFix] =useState(false)
    function setFixed(){
        if(window.pageYOffset >= 90){
            setFix(true);
            console.log(Fix)
        }else{
            setFix(false);
        }
    }
    window.addEventListener("scroll", setFixed)
    return (
        <>
        <SocialNav/>
            <header className={`${Fix ? 'fixed top-0 left-0 right-0 h-100' : ''} bg-primary h-100 relative  w-full transition-all ease-in-out z-10`} >
                <nav className='w-4/5 mx-auto flex items-center justify-between'>
                    <a href="/"><img src={logo} width={150} alt="home-massage-logo" className=' '/></a>
                    <div className="">
                        <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-10 cursor-pointer md:hidden text-white'>
                        <i class={open ? "fa fa-times" :"fa fa-bars"}></i>
                        </div>
                        <ul className={`md:flex md:items-center bg-primary absolute right-0 w-2/5  md:sticky  transition-all duration-500 ease-in ${open ? 'top-20 opacity-100':'top-[-500px] opacity-0'} opacity-100  md:opacity-100 md:pt-0 pt-6 md:pl-0 pl-10 md:py-0 py-10 `}>
                            {Links.map((link) =>(
                                <li className='md:mx-3 md:my-0 my-7 '>
                                <a  href={link.link} className='text-white hover:text-blue duration-500'>{link.name}</a>
                            </li>
                            ))}
                        
                        <button className='transition ease-in-out duration-700 px-4 py-3 text-white rounded-xl bg-blue hover:bg-white hover:text-primary '>Get Demo</button>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    );
}
 
export default NavBar;