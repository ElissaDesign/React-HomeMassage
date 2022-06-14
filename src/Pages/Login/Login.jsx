import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../../config/firebase-config";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [error, setError] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const handleLogin = (e) =>{
        e.preventDefault();
        console.log(email)
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            navigate("/")
        })
        .catch((error) => {
            setError(true)
        });
            
        }
    return ( 
        <div className="h-screen flex items-center justify-center">
            <form className="flex flex-col" onSubmit={handleLogin}>
                
                <input type="email" placeholder="email"  className="w-[300px] h-[30px] m-4" onChange={e =>setEmail(e.target.value)}/>
                
                <input type="password" placeholder="pasword"  className="w-[300px] h-[30px] m-4" onChange={e =>setPassword(e.target.value)}/>
                <button type="submit" className="w-[300px] h-[30px] m-4 bg-primary text-white">Login</button>
                {error && <span className="text-center text-crimsom text-sm">Wrong Inputs</span>}
            </form>
        </div>
     );
}
 
export default Login;