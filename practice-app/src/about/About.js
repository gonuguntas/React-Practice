import React from 'react';
import ParentProps from './PropsExamples/ParentProps';
import Formexample from './Formexample';
import props12 from './bharath/props12';
import MapArray1 from './MapArray/MapArray1';
import Pushmethod from './PushMethod/Pushmethod';
import Voters from './api/Voters';
import Apiexample from './api/Apiexample';
class About extends React.Component {
    render() {
        return(
            <div>
                About Component
                <Formexample />
                <ParentProps/>
                <MapArray1/>
                <Pushmethod/>
                <hr />
                Rest API Example
                <Voters />
                <hr/>
                <Apiexample/>

                
            </div>
        )
    }
}

export default About;