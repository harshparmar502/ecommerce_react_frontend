import React, { useState } from 'react';
import { login } from '../../api/productApi';

function Auth() {

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState("");


const loginFormSubmit = async (e) => {
  e.preventDefault();
  setError("");
  try{
    const token = await login({email, password})
    console.log(token);
  } 
  catch(err){
    setError(err);
  }
}

  return (
    <>
    <h3>Login</h3>
    <form onSubmit={loginFormSubmit}>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input type="email" className="form-control" onChange={(e) => setEmail(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp" required />
        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e) => setPassword(e.target.value)} required />
      </div>
      <div className="form-group form-check">
        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
      </div>
      {error && <p className="text-danger">{error}</p>}
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    </>
  )
}

export default Auth