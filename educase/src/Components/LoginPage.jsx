import React from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
    return(
        <div className="lpd">
            <div className="lopd1">
                <h1 className="loph1">Signin to your PopX account</h1>
                <p className="lopp1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, voluptas!</p>
                <p className="lopp2">Email Address</p>
                <input className="lopi1" type="text" placeholder="Enter email address"/>
                <p className="lopp3">Password</p>
                <input className="lopi2" type="text" placeholder="Enter password"/>
                <Link to='/profile'><button className="lopbtn">Login</button></Link>
            </div>
        </div>
    )
}

export default LoginPage;