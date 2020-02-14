import React, {Component} from 'react';
import MapFilter from './MapFilter'
import { connect } from 'react-redux';
import fetchAllMap from '../actions/fetchAllMap';
import addIssue from '../actions/addIssue';

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
           
              
                <div className="map-parent">
               <MapFilter/>
                <div className="map">
                <TheMap userEvents={this.props.userEvents} addIssue={this.props.addIssue} data={this.props.displayMap} history={this.props.history} user={this.props.user}/>
               </div>
              
               </div>
           
        )
    }
}


const mapDispatchToProps =(dispatch)=>{
    return {
        fetchAllMap: () => { dispatch(fetchAllMap()) },
        addIssue: (event, issueData, history) => {dispatch(addIssue(event, issueData, history))}
    }
}

const mapStateToProps = (state) => {
    return {
        displayMap: state.map.displayMap,
        user: state.user.currentUser,
        userEvents: state.user.userEvents
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MapParent)