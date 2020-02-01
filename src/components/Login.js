import React, { Component } from 'react';
import { connect } from 'react-redux';
import logIn from '../actions/logIn'

class Login extends Component{
    constructor(){
        super()
        this.state = {
            username: "",
            password: ''
        }
    }

    handleChange =(event)=>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render(){
        return(
            <div>
                
                <center>
                    <h3>Please Login</h3>
                        <form onSubmit={(event) => {this.props.logIn(event, this.state, this.props.history)}}>
                            <label>Username</label>
                            <br></br>
                            <input onChange={this.handleChange}
                                name="username"
                                type="username"
                                value={this.state.username}/>
                                <br></br>
                            <label>Enter Password</label>
                            <br></br>
                            <input  onChange={this.handleChange}
                                name="password"
                                type="password"
                                value={this.state.password}/>
                                <br></br>
                            <input type="submit" value="Login"/>
                        </form>
                        { 
                        <h6 id="login-error" style={{color:"red"}}></h6>
                        }       
                </center>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logIn: (event, userInput, history) => { dispatch(logIn(event, userInput, history)) }
    }
}

export default connect(null, mapDispatchToProps)(Login)