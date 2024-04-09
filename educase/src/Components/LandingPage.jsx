import React from "react";
import { Link } from "react-router-dom";
import "../index.css"

const LandingPage = () => {
    return(
        <div className="lpd">
            <div className="lpd1">
                <h1 className="lph1">Welcome to PopX</h1>
                <p className="lpp">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, totam.</p>
                <Link to="/SignUp" ><button className="lpb1">Create Account</button></Link>
                <Link to='/login'><button className="lpb2">Already Registered? Login</button></Link>
            </div>
        </div>
    )
}

export default LandingPage;