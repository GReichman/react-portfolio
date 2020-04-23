import React from "react";
import { Link, useLocation } from "react-router-dom";


function Navbar() {
    const location = useLocation().pathname;
    console.log(location);
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link to="/">
            <h1 className="navbar-brand" href="index.html">Garrett Reichman</h1>
            </Link>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/">
                            <h4 className={ location==="/"?"nav-link active" : "nav-link"} >About <span className="sr-only">(current)</span></h4>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/portfolio">
                            <h4 className={ location==="/portfolio"?"nav-link active" : "nav-link"} >Portfolio</h4>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/links">
                            <h4 className={ location==="/links"?"nav-link active" : "nav-link"} >Links</h4>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}



export default Navbar;