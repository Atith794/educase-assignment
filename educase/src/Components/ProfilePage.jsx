import React from "react";
// import profilePic from "../assets/";

const ProfilePage = () => {
    return(
        <div className="lpd">
            <div className="ppd2">
                <h2 className="pph2">Account Settings</h2>
            </div>
            <div className="ppd3">
                <img className="ppimg" src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" alt="Profile Image"/>
                <div className="ppd3d1">
                    <p className="ppp1">Marry Doe</p>
                    <p className="ppp2">Marry@Gmail.Com</p>
                </div>
            </div>
            <p className="ppp3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Iusto, assumenda quia quo corrupti nemo consequuntur 
                maiores illo alias, nihil sunt voluptates error sint tenetur 
                dolor exercitationem similique recusandae asperiores perferendis.
            </p>

            <hr></hr>
        </div>
    )
}

export default ProfilePage;