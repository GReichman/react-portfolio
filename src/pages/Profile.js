import React from "react";
import pic from "../pictures/photo2.png"
function Profile(){
return(
<div className="container">
        <div className="row justify-content-center">
            <div className="col-7">
                <div className="card justify-content-center">
                    <img className="card-img-top mr-3 rounded" src={pic} alt="myphoto"/>

                    <div className="card-body">
                        <h3 className="card-title">Garrett Reichman</h3>
                        <p className="card-text"> I am a growing software developer with experience in many different
                            languages and technologies. I have a bachelors degree in Computer
                            Science from the University of Georgia and am currently taking part
                            in a Full Stack Development bootcamp at Georgia Tech.</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <p className="list-group-item">Location: Newnan, GA</p>
                        <p className="list-group-item">Email: Gsreichman@gmail.com</p>
                        <p className="list-group-item">Phone: 404-491-4713</p>
                    </ul>
                </div>
            </div>
        </div>
    </div>
);
}

export default Profile;