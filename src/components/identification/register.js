import React, { Component } from 'react';
import './style.css';

class Register extends Component {
    render() {
        return (
            <div>
                <div className="card bg-light">
   <article className="card-body mx-auto" >
      <h4 className="card-title mt-3 text-center">Create Account</h4>
      <p className="text-center">Get started with your free account</p>
      <p>
         <a href="" className="btn btn-block btn-twitter"> <i className="fab fa-twitter"></i>   Login via Twitter</a>
         <a href="" className="btn btn-block btn-facebook"> <i className="fab fa-facebook-f"></i>   Login via facebook</a>
      </p>
      <p className="divider-text">
         <span className="bg-light">OR</span>
      </p>
      <form>
         <div className="form-group input-group">
            <div className="input-group-prepend">
               <span className="input-group-text"> <i className="fa fa-user"></i> </span>
            </div>
            <input name="" className="form-control" placeholder="Full name" type="text"/>
         </div>
      
         <div className="form-group input-group">
            <div className="input-group-prepend">
               <span className="input-group-text"> <i className="fa fa-envelope"></i> </span>
            </div>
            <input name="" className="form-control" placeholder="Email address" type="email"/>
         </div>
       
         <div className="form-group input-group">
            <div className="input-group-prepend">
               <span className="input-group-text"> <i className="fa fa-phone"></i> </span>
            </div>
                
            <input name="" className="form-control" placeholder="Phone number" type="text"/>
         </div>
        
         
        
         <div className="form-group input-group">
            <div className="input-group-prepend">
               <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
            </div>
            <input className="form-control" placeholder="Create password" type="password"/>
         </div>
     
         <div className="form-group input-group">
            <div className="input-group-prepend">
               <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
            </div>
            <input className="form-control" placeholder="Repeat password" type="password"/>
         </div>
                               
         <div className="form-group">
            <button type="submit" className="btn btn-primary btn-block"> Create Account  </button>
         </div>
       
         <p className="text-center">Have an account? <a href="/login">Log In</a> </p>
      </form>
   </article>
</div>
            </div>
        );
    }
}

export default Register;
