import React, {Component} from 'react';
import { connect } from 'react-redux';
import Marker from './Marker'
class MapList extends Component{
    constructor(){
        super()
    }

    

    render(){
       
        return(
            <div className="mapList">
                
        <div>{this.props.displayMap && this.props.displayMap[0].map(object => <Marker data={object}/>)}</div>
            </div>
            
        )
    }
}

const mapStateToProps =(state)=>{
    return{
        displayMap: state.map.displayMap
    }
}

export default connect(mapStateToProps, null)(MapList) 