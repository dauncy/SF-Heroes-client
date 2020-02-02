import React, {Component} from 'react';
import {connect} from 'react-redux';
import EditProfile from './EditProfile'
import MapContainer from '../containers/MapContainer'
class Profile extends Component {

    handleClick =(event)=>{
        event.preventDefault()
      
    }
    render(){
        return(
            <div>
                <center>
                     <h3>Welcome {this.props.user.currentUser.name}</h3>
                     {/* <MapContainer/> */}
                        <button>Edit Profile</button>
                </center>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}
export default connect(mapStateToProps, null)(Profile)