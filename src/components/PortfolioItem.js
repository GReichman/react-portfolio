import React from "react";



function PortfolioItem(props){
    return (
        <div className="row justify-content-center portfolioRow">
            <div className="col-12">
                <div className="card">
                    <img className="card-img-top" src={props.src} alt="project"/>
                    <div className="card-body">
                        <h4 className="card-text">{props.title}</h4>
                        <span>Live:</span><a className="card-text" href={props.live}> {props.live}</a>
                        <br/>
                        <span>Repo:</span><a className="card-text" href={props.git}> {props.git}</a>
                    </div>
                </div>
            </div>
                
        </div>
    
        )
    }
    
    export default PortfolioItem;