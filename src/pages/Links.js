import React from "react";
import ContactLink from "../components/contactLink";
import Resume from "../pictures/resume.pdf";




function Links() {

    const resume = (
        <h3 id="portText" className="linkPic">Resume</h3>
    );
    const github = (
        <img className="linkPic" src="https://i.ytimg.com/vi/OEGm7LXAN_c/maxresdefault.jpg" alt="github" />
    );
    const linkedin = (
        <img className="linkPic"
            src="https://blog.linkedin.com/etc/designs/linkedin/katy/global/clientlibs/img/default-share.png"
            alt="linkedin"></img>
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