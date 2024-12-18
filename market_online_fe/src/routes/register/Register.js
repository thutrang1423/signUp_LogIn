import "./Register.scss"
import {Link, useNavigate} from "react-router-dom"
import axios from "axios"
import apiRequest from "../../lib/apiRequest"
import { useState } from "react"

export default function Register() {
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const navigate = useNavigate

    const handleSubmit = async (e) =>{
        e.preventDefault()
        setError("")
        setIsLoading(true)
        const formData = new FormData(e.target);

        const username = formData.get("username");
        const email = formData.get("email");
        const password = formData.get("password");        
        
        try{
            const res = await apiRequest.post("api/auth/register",{
                username,email,password
            })
            navigate("/login")
            
            console.log(username,email,password);
            console.log(res.data);
        }catch(err){
            // console.log(err)
            // setError(err.response.data.message)

            console.log(err); // Debug lỗi
            if (err.response && err.response.data && err.response.data.message) {
                setError(err.response.data.message); // Hiển thị lỗi từ server
            } else {
                setError("An unexpected error occurred."); // Lỗi không xác định
            }
        }finally{
            setIsLoading(false)
        }
    };
  return (
    <div className='registerPage'>
        <div className='formContainer'>
            <form onSubmit={handleSubmit}>
                <h1>Create an Account</h1>
                <input name="username" type="text" placeholder='Username'/>
                <input name="email" type="text" placeholder='Email'/>
                <input name="password" type="password" placeholder='Password'/>
                <button disabled={isLoading}>Register</button>
                {error && <span>{error}</span>}
                <Link to='/login'>Do you have an account?</Link>
            </form>
        </div>
    </div>
  )
}