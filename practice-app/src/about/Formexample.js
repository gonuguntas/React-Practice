import React from 'react';
import FormexampleChild from './FormexampleChild';
class Formexample extends React.Component {
     constructor(props) {
         super(props);

        this.state = {
            firstname : ""
        }

     }

     getChangeValue = (event) => {
         this.setState({firstname : event.target.value});
         
     }
    render(){
        console.log('change value is', this.state.firstname);
    
    return(
        <div> 
        
        
        <FormexampleChild getChangedata={this.getChangeValue} firstname = {this.state.firstname}/>
        </div>
    )
}
}

export default Formexample;