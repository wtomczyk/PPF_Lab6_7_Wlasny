import React, {Component} from "react";
import './Header.css'
import logo from '../res/logo.png'
class Header extends Component{
    render(){
        var aaa = this.props.aaa
        return(
            <div id="header">
                <img src={logo} onClick={aaa} id="logoImg"></img>
            </div>
        )
    }
}
export default Header