import React from 'react';
import ParentProps from './ParentProps';

function ChildProps(props) {

    return(
           <div>
               <div>
                   <input type='text' onChange= {props.getFirstName} />
                   
               </div>
               <div>Firstname:{props.fName}</div>
               <div>Lastname:{props.lName}</div>
           </div>

    )

}

export default ChildProps;