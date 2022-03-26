import React from 'react';
import './Popup.css';

function Popup(props){

return(props.trigger)?
  
   ( <div className="popup">
        <div className="popoup_inner">
            <button onClick={()=>props.setTrigger(false)} className="closeBtn">X</button>
                {props.children}
        </div>
    </div>) : "";
}

export default Popup;