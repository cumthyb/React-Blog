import React, { Component } from 'react';
import img404 from './404.png';

class NotFound extends Component{
    render(){
        return(
            <img src={img404} alt="404 Not Found" style={{width:'100%',overflow:'hidden'}}/>
        )
    }
}


export default NotFound;