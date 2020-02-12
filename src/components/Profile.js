import React, {Component} from 'react';
import {connect} from 'react-redux';
import EditProfile from './EditProfile';
import UserEvent from './UserEvent'

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
        console.log(this.props)
        return(
            <div className="profilePage">
                <div>
                 <h2 className="welcome">Welcome {this.props.user.name}</h2>
                 </div>
                <div className="profile-container">
               
                    <div className="upcomingEvents">
                        <h3 className="upcoming-title">Upcoming</h3>
                        <div>
                            {this.props.events.filter(event => event.status=="Accepted").length === 0? 
                                <h4 className="no-events">Looks like you have no upcoming events..</h4> :
                                    this.props.events.map((event) => <UserEvent data={event}/>) }
                           
                        </div>
                    </div>
                    <div className="completedEvents">
                        <h3 className="completed">Completed</h3>
                        <div>
                        {this.props.events.filter(event => event.status=="Closed").length === 0? 
                                <h4 className="no-events">Looks like you have no completed events..</h4> :
                                     this.props.events.map((event) => <UserEvent data={event}/>) }
                        </div>
                    </div>
                    <div className="settings">
                        <h3 className="settings-title">Settings</h3>
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
        clearCurrentUser: () => dispatch({ type: "CLEAR_CURRENT_USER" })

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)