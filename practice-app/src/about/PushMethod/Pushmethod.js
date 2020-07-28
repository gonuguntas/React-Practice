import React from 'react';


class Pushmethod extends React.Component {
    constructor(props){
        super(props);
    this.state={
        voters:[]
    }
    
    }
    voterdata=() =>{
        const vlist=document.getElementById('vote').value;
        console.log('this is voter list',vlist)
        const election=this.state.voters;
        console.log('final data',election)
        // election.push(vlist);
         const newList =  [...election, vlist];

       // election.splice(election.length, 0, vlist);
        this.setState({voters:newList});
        document.getElementById('vote').value=""; 
    }



render(){

    return(
        
        <div>
          <div>this is push method</div>
          <input type='text' id='vote'></input>
          <input type='button' value='tryit' onClick={this.voterdata} />
          <div>
              {this.state.voters.map(function(Details){
                  return(
                          <div>
                              <div>{Details}</div>
                          </div>
                          
                           
                  )
              })}

          </div>
        </div>
    )
}

}
export default Pushmethod;



