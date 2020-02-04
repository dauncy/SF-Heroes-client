import React, {Component, Fragment} from 'react';
import citywalk from '../citywalk.jpeg';
import NavBar from './NavBar';
import GGB from '../ggb.png'
import {connect} from 'react-redux';

class Home extends Component{

    logout = () =>{
        localStorage.removeItem('jwt')
        this.props.clearCurrentUser()
    }
    handleClick = (event) =>{
        this.props.history.push(`/${event.target.id}`)
    }
    render(){
        const loggedIn = !!this.props.user.id
    return(
        <div className="Homepage">
            <NavBar/>
            <div className="quote">
            
            </div>
            <div className="choice-container">
              
                <p className="app-title">HOOD HEROES</p>
                
                <img className="homepage-logo" src={GGB}></img>
                {loggedIn? 
                <Fragment>
                    <button className="signup-button" id="logout" onClick={this.logout}>Logout</button>
                    <button className="login-button" id="profile" onClick={this.handleClick}>Profile</button>
                </Fragment> : 
                <Fragment>
                    <button className="signup-button" id="signup" onClick={this.handleClick}>Sign Up</button>
                    <button className="login-button" id="login" onClick={this.handleClick}>Login</button> 
                </Fragment>}
            </div>
            
        </div>
    )
    }
}

const mapStateToProps = (state)=>{
    return {
    
        user: state.user.currentUser
        
      }
}

const mapDispatchToProps = (dispatch) => {
    return {
        clearCurrentUser: () => dispatch({ type: "CLEAR_CURRENT_USER" })

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)