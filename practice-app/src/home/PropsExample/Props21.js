import React from 'react';


function Props21(props){
    console.log('21 props',  props)
    return(
        <div>
            <div> {props.fn }</div>
            <div>{props.ln} </div>
        </div>
    )
}
export default Props21;