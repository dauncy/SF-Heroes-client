import React, { Component } from 'react';
import { connect } from 'react-redux';
import logIn from '../actions/logIn';
import NavBar from './NavBar';
import Home from './Home'

class Login extends Component{
    constructor(){
        super()
        this.state = {
            username: "",
            password: ''
        }
    }

   
    componentDidMount(){
        
        if (localStorage.getItem("jwt") !==  null ){ 
            this.props.history.push('/')
        }

    
        
    }
    handleChange =(event)=>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render(){
        return(
            <div className="loginPage">
                <NavBar/>
                
                <div className="choice-container">
                    <center>
                    <h3 className="login-title">Please Login</h3>
                            <form onSubmit={(event) => {this.props.logIn(event, this.state, this.props.history)}}
                            className="login-form">
                                <label className="login-label-2">Username</label>
                                <br></br><br></br>
                                <input onChange={this.handleChange}
                                    name="username"
                                    type="username"
                                    value={this.state.username}
                                    className="login-input-1"
                                    placeholder="enter username"/>
                                    <br></br><br></br>
                                <label className="login-label-1">Enter Password</label>
                                <br></br><br></br>
                                <input  onChange={this.handleChange}
                                    name="password"
                                    type="password"
                                    value={this.state.password}
                                    className="login-input-2"
                                    placeholder="enter password"/>
                                    <br></br><br></br>
                                <input align="center" className='login-form-button' type="submit" value="Login"/>
                            </form>
                            { 
                            <h6 id="login-error" style={{color:"red"}}></h6>
                            }       
                    </center>
                    </div>
                </div>
           
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logIn: (event, userInput, history) => { dispatch(logIn(event, userInput, history)) }
    }
}

const mapStateToProps = (state) => {
    return {
    
        user: state.user
        
      }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)