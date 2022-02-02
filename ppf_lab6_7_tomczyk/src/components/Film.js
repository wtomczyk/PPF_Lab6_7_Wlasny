import React from "react";
import './Film.css'
export const Film = (props) =>{
    return(
        <div >
            <h1>Możliwe jest zamieszczanie filmów na stronie</h1>
            <div id="videobox"> 
                <iframe className="iframe" width="800" height="450" src="https://www.youtube.com/embed/wN-mZtbX2Pg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen ></iframe>
            </div>
        </div>
    ) 
}