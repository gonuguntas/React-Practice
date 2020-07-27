import React from 'react';
import axios from 'axios';

class Voters extends React.Component {
    constructor(props) {
        super(props);

        this.state = { voters: []}
    }

    componentDidMount(){
        axios.get('http://localhost:4000/voters')
        .then((res)=>{
            this.setState({ voters: res.data});
            console.log('response is', res.data);
            
        })
        .catch(function(error) {
            console.log('error is', error)
        })
    }

    getApi = () => {
        
         axios.get('http://localhost:4000/voters')
        .then((response)=> {
            console.log('data is', response.data);
          
        this.setState({ voters: response.data});
        })
        .catch(function(error) {
            console.log('error', error)
        })
    }
 

    render(){
        console.log('Final data is ', this.state.voters)
        return(
            <div>
                <input type="button" value="Get API" onClick={() => this.getApi()} />
                <div>{this.state.voters.map((v)=>{
                    return(
                        <div>
                            <div>{v} </div>
                        </div>
                    )
                } )} </div>
            </div>
        )
    }
}

export default Voters;