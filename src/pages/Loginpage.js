import React,{useState} from 'react';
import Navbar from '../components/Navbar';
import './Auth.css';

const Loginpage=()=>{
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');

    const handleLogin=(e)=>{
        e.preventDefault();
        console.log('Logging in with',email,password);
    };
    return (
        <div className='auth-page'>
            <Navbar/>
            <div className='auth-container'>
            <h1>Login</h1>
            <form onSubmit={handleLogin}></form>
            <div className='form-group'>
                <label>Email</label>
                <input type="email" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
                <div className="form-group">
                <label>Password</label>
                <input
                type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <button type="submit" className="btn btn-primary">Login</button>
          </div>
            </div>
            </div>
        </div>
    );
};
export default Loginpage;