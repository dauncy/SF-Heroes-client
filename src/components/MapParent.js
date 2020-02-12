import React, {Component} from 'react';
import MapFilter from './MapFilter'
import { connect } from 'react-redux';
import fetchAllMap from '../actions/fetchAllMap';


import TheMap from '../containers/TheMap'
class MapParent extends Component{
    constructor(){
        super()
        this.state={

        }
    }
    
    componentDidMount(){
       
    }

    render(){
        return(
            <div >
              
                <div className="map-parent">
               <MapFilter/>
                <div className="map">
                <TheMap data={this.props.displayMap} history={this.props.history}/>
               </div>
              
               </div>
            </div>
        )
    }
}


const mapDispatchToProps =(dispatch)=>{
    return {
        fetchAllMap: () => { dispatch(fetchAllMap()) }
    }
}

const mapStateToProps = (state) => {
    return {
        displayMap: state.map.displayMap
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MapParent)