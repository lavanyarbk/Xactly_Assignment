import React, { Fragment } from "react";
import Popup from "./Popup";
import { useState } from "react"
import data from "./data.json";


function randomIntFromInterval(min, max) { 
  return Math.floor(Math.random() * (max - min + 1) + min)
}


const Card = (props) => {
  var salesCondition = '';
   var salesExplanation = '';
  const [buttonPopup,setButtonpopup] = useState(false);


  return (
    <ul>
      {props.data.map((item,index) => (

        <Fragment key={item.name}>
        
          <li>
            <div >
              <div className="image">
                <img 
                  src={"https://randomuser.me/api/portraits/"+item.gender+"/"+item.id+".jpg"}
                  alt="Profile"
                />
              </div>
              
              {(() => {
                  item.salesCondition = randomIntFromInterval(25000,100000)
                  if(item.designation =='Global Vice President'){
                    salesCondition = '#ffffff'
                    item.salesExplanation = item.name
                  }else{
                    if(item.salesCondition <= 50000){
                      salesCondition = '#D94444'
                      item.salesExplanation = item.name+' working as '+item.designation+' has made a sales of $ '+item.salesCondition+ ' for this quater which is less than the company expectation'
                    
                    }else if(item.salesCondition >50000 && item.salesCondition <=75000 ){
                      salesCondition = '#08e008'
                      item.salesExplanation = item.name+' working as '+item.designation+ ' has made a sales of $ '+item.salesCondition+ ' for this quater which is meets the company expectation,but should be improved'
                    }else{
                      salesCondition = '#f0f036'
                      item.salesExplanation = item.name+' working as '+item.designation+' has made a sales of $ '+item.salesCondition+ ' which is out standing'
                    }
                 }
                }
                )()
                }
              <div onClick={(e)=> {setButtonpopup(true)
              }} className="card-body" style={{backgroundColor:salesCondition}} >
              
                <h4>{item.name}</h4>
                <p>{item.designation}</p>
                <p>{item.country}</p>
              </div>
            </div>
            {item.children?.length  &&  <Card data={item.children} /> }
          </li>

          <Popup  trigger={buttonPopup} setTrigger={setButtonpopup} item ={item}>
             <h3> {item.salesExplanation}</h3>
           </Popup> 

        </Fragment>
      ))} 
    </ul>   
  );
};

const Organization = () => {
  return (
    <div className="org-tree">
      <Card data={data} />
     
    </div>
  );
};

export default Organization;
