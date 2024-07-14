import React,{useState} from 'react';
import Navbar from '../components/Navbar';
import './Auth.css';

const Signup=()=>{
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[confirmPassword,setConfirmPassword]=useState('');

    const handleSignup = (e)=> {
        e.preventDefault();
        if(password!==confirmPassword){
            alert("password doesn't match");
            return;
        }
        console.log('Signing up with',email,password);
    };
    return (
        <div className="auth-page">
        <Navbar /> 
        <div className="auth-container">
        <h1>Sign Up</h1>
        <form onSubmit={handleSignup}>
          <div className="form-group">
            <label>Email</label>
            <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required/>
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} required/>
          </div>
          <div className="form-group">
            <label>Confirm Password</label>
            <input type="password" className="form-control" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required/>
          </div>
          <button type="submit" className="btn btn-primary">Sign Up</button>
        </form>
      </div>
    </div>
    );
};
export default Signup;