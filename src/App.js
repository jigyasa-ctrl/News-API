import React, { Component } from "react";
import './App.css'
import { Hello } from "./compnents/article1";
import { App } from "./compnents/article2";
import Navbar from "./compnents/navbar";


class Main extends Component{
    render() {
        return(
            <div className='main'>
                <Navbar/>
                <h1>Top business headlines in the India right now</h1>
               <App/>
               <h1>Top headlines from TechCrunch right now</h1>
               
               <Hello/>
            </div>
            
        )
    }
}
export default Main;
