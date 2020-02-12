import React, {Component} from 'react'
import { connect } from 'react-redux';
import { Map, GoogleApiWrapper } from 'google-maps-react';
const mapStyles = {
    width: '100%',
    height: '100%'
  };
class Marker extends Component{
    constructor(props){
        super(props)
        
    }

    render(){
        console.log(this.props.data)
        return(
            <div>
                <ul>
                    <li>
                        <p>{this.props.data.title}</p>
                        <p>{this.props.data.district}</p>
                     </li>
                    
                        
                     
                </ul>
            </div>
        
        )
    }
}


export default connect(null, null)(Marker)