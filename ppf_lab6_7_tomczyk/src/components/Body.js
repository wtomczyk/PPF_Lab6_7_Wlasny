import React, {Component} from "react";
import './Body.css'
import Header from "./Header";
import Nav from "./Nav";
import { Home } from "./Home";
import MainPage from "./MainPage";
import { LastPage } from "./LastPage";

export default class Body extends Component{
    constructor(props){
        super(props)
        this.state={
            st:1
        }
    }
    stateChange1 = () =>{
        this.setState({st:1})
        console.log("1")
    }
    stateChange2 = () =>{
        this.setState({st:2})
        console.log("2")
    }
    stateChange3 = () =>{
        this.setState({st:3})
        console.log("3")
    }
    render(){
        return(
            <div id="bodyBox">
                <Header aaa={this.stateChange1}/>
                <Nav a1={this.stateChange1} a2={this.stateChange2} a3={this.stateChange3}/>
                {this.state.st==1 ? <Home/> : this.state.st==2 ? <MainPage/> : <LastPage/>}
            </div>
        )
    }
}