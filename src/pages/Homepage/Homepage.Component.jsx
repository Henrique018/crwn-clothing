import React from 'react';
import {HomepageContainer} from './Homepage.styles'
import Directory from '../../Components/directory/directory.component'

const Homepage = () =>{
    return(
        <HomepageContainer>
           <Directory />
        </HomepageContainer>
    );
}

export default Homepage;