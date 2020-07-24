import React from 'react'
import ParentProps from './ParentProps';

function ChildProps (props) {

    return(
    <div>

        <div>this is ChildProps component</div>
        <div>firstName:{props.fName}  lastName:{props.lName} </div>

        <input type='text' onChange={props.getName} />

    </div>



    )

}

export default ChildProps;