import React from 'react';

class MapArray1 extends React.Component{

    constructor(props){
        super(props);

        this.state = {
           Proof :[{Aadhar:'32145',Pan:'cyn124',Address:'nvp'},{Aadhar:'84579',Pan:'zaxc41',Address:'palle'}   ]

        }


    }


    render(){
        return(
            <div>
                <div>This is Array Map Method</div>
                <div>
                    {this.state.Proof.map(
                        function(Details){
                            return(
                                <div>
                                    <div>{Details.Aadhar} </div>
                                <div>{Details.Pan} </div>
                                <div>{Details.Address} </div>
                                </div>

                                
                            )
                        }
                    )

                    }
                </div>
            </div>
        )

    }


}

export default MapArray1; 