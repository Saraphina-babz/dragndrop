

import React,{useState} from "react";
import "../styles/Login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {signInWithEmailAndPassword} from "firebase/auth";
import { auth } from "../firebaseConfig";
import { Link } from "react-router-dom";



function Login() {
const [email, setEmail]= useState('');
const [password, setPassword]= useState('');

const logIn=(e)=>{
e.preventDefault();
signInWithEmailAndPassword(auth, email, password)
.then((userCredential)=>{
    console.log(userCredential)
}).catch((error)=>{
    console.log(error)
})
}

return (
    <div className="wrapper bg-dark d-flex align-items-center justify-content-center w-100">
      <div className="Login">
        <h2 className="mb-3">Login Form</h2>
        <form onSubmit={logIn} className="needs-validation">
          <div className="form-group was-validated mb-2">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <input type="text" className="form-control" 
            value={email}
            onChange={(event)=>setEmail(event.target.value)}
            required />

            <div className="invalid-feedback">Please Enter your email</div>
          </div>

          <div className="form-group was-validated mb-2">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input type="password" className="form-control"
             value={password}
             onChange={(event)=>setPassword(event.target.value)}
             required />

            <div className="invalid-feedback">Please Enter your password</div>
          </div>
          <button className="btn btn-success w-100 mt-2">LOG IN</button>
        </form>
        <div>
        <p>Don't have an account? <Link to="/signup">Sign Up</Link>
        </p></div>
      </div>
    </div>
  );
}

export default Login;
