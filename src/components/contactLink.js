import React from "react";

function contactLink(props) {
    return (
        <div className="row justify-content-center linkRow">
            <div className="col-6">

                <a id="portLink" target="_blank" rel="noopener noreferrer" href={props.clink}>
                    {props.info}
                </a>
            </div>
        </div>
    );
}


export default contactLink;