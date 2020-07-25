import React from 'react'
import ChildProps from './ChildProps';

class ParentProps extends React.Component{
     constructor(props){
     super(props);

        this.state = {
        fName:'ram',
        lName:'brahmaiah'
    }
}

         getfName =(event) =>{
            this.setState({ fName: event.target.value });
         
         }
         

        render(){
        return(
            <div>

              <div>this is parent Component</div>
              <ChildProps   fName={this.state.fName} lName='kamma' getName={this.getfName} />

              

            </div>
        )
    }
}

export default ParentProps;