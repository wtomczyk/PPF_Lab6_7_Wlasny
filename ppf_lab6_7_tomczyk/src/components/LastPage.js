import React from "react";
import './LastPage.css'
import LadowanieObrazow from "./LadowanieObrazow";
import { Film } from "./Film";
import A1 from "./a1";
import Warunkowe from "./Warunkowe";
export const LastPage = (props) =>{
    return(
        <div>
            <LadowanieObrazow/>
            <Film/>
            <h1>Komponent zawierający komponent zawierający komponent zawierający komponent</h1>
            <A1/>
            <Warunkowe/>
        </div>
    ) 
}

//został jeszcze formularz i eventy w stronie głównej