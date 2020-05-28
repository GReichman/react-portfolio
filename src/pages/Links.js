import React from "react";
import ContactLink from "../components/contactLink";
import Resume from "../pictures/resume.pdf";


const linkStyle = {
    height: "100px",
    width: "100%"
}


function Links() {

    const resume = (
        <h3 id="portText" className="linkPic" style={linkStyle}>Resume</h3>
    );
    const github = (
        <img className="linkPic" src="https://i.ytimg.com/vi/OEGm7LXAN_c/maxresdefault.jpg" alt="github" 
        style={linkStyle}/>
    );
    const linkedin = (
        <img className="linkPic"
            src="https://compasstr.com/wp-content/uploads/2018/07/linkedin-icon-t.png"
            alt="linkedin"
            style={linkStyle}>
                
            </img>
    );

    return (
        <div className="container">
            <h1 id="linkHead">Links</h1>
            <ContactLink info={resume}  clink={Resume}></ContactLink>
            <ContactLink info={github} clink="https://github.com/GReichman"></ContactLink>
            <ContactLink info={linkedin} clink="https://www.linkedin.com/in/garrettreichman/"></ContactLink>
        </div>
    );

}


export default Links;