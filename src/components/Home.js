import React, {Component} from 'react';
import citywalk from '../citywalk.jpeg';
import NavBar from './NavBar';
import GGB from '../ggb.png'

class Home extends Component{

    
    render(){
    return(
        <div className="Homepage">
            <NavBar/>
            <div className="quote">
            
            </div>
            <div className="choice-container">
              
                
                
                <img className="homepage-logo" src={GGB}></img>
                
            </div>
            
        </div>
    )
    }
}

export default Home