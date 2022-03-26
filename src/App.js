import React from "react";
import "./tree_style.css";
import Organization from "./Organization";
import { useState,useEffect } from 'react';




const  App=()=> {
  const [counter,setCounter] = useState(0);

  useEffect(()=>{
    const timeInterval = setInterval(()=>{
    setCounter((prevCounter) => prevCounter + 1);
    },1800000)
    return()=> clearInterval(timeInterval)
},[]);

  return (
    <div className="App">
      <div className="header">
        <span className="button_span">
        <button className="back_to_home">GO TO HOME PAGE</button> </span>
         Sales Condition Across The Organization 
       <span className="link" >
         <a href="">
             Sales Dashboard
          </a></span>
      </div>
      <div className="container">
        <Organization />
      </div>
    </div>
  );
}

export default App;
