import React from 'react';
import ParentProps from './PropsExamples/ParentProps';
import Formexample from './Formexample';
import props12 from './bharath/props12';
import MapArray1 from './MapArray/MapArray1';
class About extends React.Component {
    render() {
        return(
            <div>
                About Component
                <Formexample />
                <ParentProps/>
                <MapArray1/>
            </div>
        )
    }
}

export default About;