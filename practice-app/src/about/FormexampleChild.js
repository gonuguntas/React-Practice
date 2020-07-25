import React from 'react';

function FormexampleChild (props){

    return(
        
            <div>
            
                Firstname:<input type ="text" onChange={props.getChangedata} />
                <div>{props.firstname}</div>

                <label>childcomponent</label>
            </div>

        
    )
}

export default FormexampleChild;