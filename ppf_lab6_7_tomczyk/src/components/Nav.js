import React, {Component} from "react";
import './Nav.css'
class Nav extends Component{
    render(){
        var aaa = this.props
        return(
            <div id="nav">
                <div id="button1" className="button" onClick={aaa.a1}>
                    Strona Home
                </div>
                <div id="button2" className="button" onClick={aaa.a2}>
                    Strona Główna
                </div>
                <div id="button3" className="button" onClick={aaa.a3}>
                    Strona Trzecia
                </div>
            </div>
        )
    }
}
export default Nav