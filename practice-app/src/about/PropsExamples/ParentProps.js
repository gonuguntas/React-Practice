import React from 'react'
import ChildProps from './ChildProps';

class ParentProps extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            firstName:'',
            lastName:'brahmaiah'
        }
    }
      
         getFname = (event) =>{
            this.setState ({firstName:event.target.value})
         }

    render(){
          console.log('Parent data is',this.state);

        return(

            <div>

            <div>ParentProps</div>
            <ChildProps fName={this.state.firstName} lName={this.state.lastName} 
            getFirstName={this.getFname}
            
            />
            
            
            </div>
        )
    }
} 

export default ParentProps;