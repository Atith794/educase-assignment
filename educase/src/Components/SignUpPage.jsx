import React from "react";
import { Link } from "react-router-dom";

const SignUpPage = () => {
    return(
        <div className="lpd">
            <div className="sud1">
                <h1 className="suh1">Create your PopX account</h1>
                <p className="sup1">Full Name<span>*</span></p>
                <input className="sui1" type="text" placeholder=""/>
                <p className="sup2">Phone Number<span>*</span></p>
                <input className="sui1" type="text" placeholder=""/>
                <p className="sup3">Email address<span>*</span></p>
                <input className="sui1" type="text" placeholder=""/>
                <p className="sup4">Password<span>*</span></p>
                <input className="sui1" type="text" placeholder=""/>
                <p className="sup5">Company name</p>
                <input className="sui1" type="text" placeholder=""/>
                <p className="sup6">Are you an Agency?<span>*</span></p>
                <input className="sui6" type="radio" placeholder=""/><span className="susp1">Yes</span>
                <input className="sui7" type="radio" placeholder=""/><span className="susp1">No</span>
                <br></br>
                <Link to='/profile'><button className="subtn">Create Account</button></Link>
            </div>
        </div>
    )
}

export default SignUpPage;