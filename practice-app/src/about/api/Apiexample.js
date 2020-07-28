import React from 'react';
import Axios from 'axios';

class Apiexample extends React.Component {
    constructor(props){
           super(props);

           this.state = {
               Values: []
           }


    }
    getCall = () =>{

     Axios.get('http://localhost:5000/Names')
     .then( (res) => {
        this.setState({Values : res.data})
         console.log('then value is',res.data)
     })
     .catch(function(err){
         console.log('error message is', err)
     })

    }


    render(){
     return(
        <div>
            <div>Get api call example</div>
            <input type='button' value='call value' onClick={this.getCall} />
            <div>
                {this.state.Values.map( (Details) => {
                    return(
                        <div>{Details} </div>
                    )
                })}
            </div>
        </div>
        

     )


    }



}

export default Apiexample;