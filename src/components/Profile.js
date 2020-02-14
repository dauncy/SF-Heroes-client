import React, {Component} from 'react';
import {connect} from 'react-redux';
import EditProfile from './EditProfile';
import UserEvent from './UserEvent'
import completeEvent from '../actions/completeEvent';

class Profile extends Component {

    handleClick =(event)=>{
        event.preventDefault()
       document.getElementById("edit-profile-yo").style.display= "block"
       document.getElementById("edit-button").style.display="none"
      
    }

    searchEvents =(event)=>{
        this.props.history.push('/map')
    }

    logout = () =>{
        localStorage.removeItem('jwt')
        this.props.clearCurrentUser()
    }

    componentDidUpdate(){
        document.getElementById("edit-profile-yo").style.display= "none"
        document.getElementById("edit-button").style.display="block"
       
    }
    

    render(){
        let acceptedArray = this.props.events.filter(issue => issue.status ==="Accepted") || [ ]
        let completedArray= this.props.events.filter(issue => issue.status === "Closed") || [ ]
        return(
            <div className="profilePage">
                <div>
                 <h2 className="welcome">Welcome {this.props.user.name}</h2>
                 </div>
                <div className="profile-container">
                <h3 className="upcoming-title">Upcoming</h3>
                <h3 className="completed">Completed</h3>
                <h3 className="settings-title">Settings</h3>
                    <div className="upcomingEvents">
                        
                        <div>
                            {acceptedArray.length === 0? 
                                <h4 className="no-events">Looks like you have no upcoming events..</h4> :
                                    acceptedArray.map(issue => <UserEvent history={this.props.history} user={this.props.user} completeEvent={this.props.completeEvent} data={issue}/>)}
                           
                        </div>
                    </div>
                    <div className="completedEvents">
                        
                        <div>
                            
                        {completedArray.length === 0 ?
                                <h4 className="no-events">Looks like you have no completed events..</h4> :
                                completedArray.map(issue => <UserEvent history={this.props.history} data={issue}/>) }
                        </div>
                    </div>
                    <div className="settings">
                        
                        <center>
                        <button className="search-events-button" onClick={this.searchEvents}>Search Events</button>
                        <br></br>
                        <br></br>
                        <button onClick={this.logout}className="logout-button">Logout</button>
                        <br></br>
                        <br></br>
                        
                        <button id="edit-button" className="edit-button" onClick={this.handleClick}>Edit Profile</button>
                        <div id="edit-profile-yo" style={{display: 'none'}}>
                            <EditProfile history={this.props.history}/>
                        </div>
                        </center>
                    </div>
                    <div>

                    </div>
                    
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user.currentUser,
        events: state.user.userEvents
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        clearCurrentUser: () => dispatch({ type: "CLEAR_CURRENT_USER" }),
        completeEvent: (event, data, history) =>  {dispatch(completeEvent(event, data, history))} 

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)