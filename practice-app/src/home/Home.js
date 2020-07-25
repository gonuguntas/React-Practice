import React from 'react';
import ParentProps from './PropsExample/ParentProps';
import Props32 from  './PropsExample/Props32'; 
class Home extends React.Component {
    render() {
        return(
            <div>
                Home Component
                <ParentProps/>
                <Props32/>
            </div>
        )
    }
}

export default Home;