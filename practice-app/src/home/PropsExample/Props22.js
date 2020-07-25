import React from 'react';
import Props21 from './Props21';
function Props22(props){
    console.log('22 props',  props)
    return(
        <div>
            <Props21 fn={props.fName} ln={props.lName}/>
        </div>
    )
}
export default Props22;