import React, { Component } from 'react';
import { connect } from 'react-redux'
import signUp from '../actions/signUp'
import NavBar from './NavBar'
class SignUp extends Component{
    constructor(){
        super()
        this.state = {
            username: "",
            name: "",
            password: "",
            password_confirmation: ""
            
        }
    }
    componentDidMount(){
        if (localStorage.getItem("jwt") !==  null ){ 
            this.props.history.push('/')
        }
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
          })
     }

    render(){
        return(
            <div className="loginPage">
                <NavBar/>
                <h3 className="signup-title">Join The Community</h3>
                <div className="signup-container">
                <center>
                    
                        <form onSubmit={(event) => {this.props.signUp(event, this.state, this.props.history)}}
                        className="signup-form">
                            <label className="signup-label">Name</label>
                            <br></br>
                            <br></br>
                            <input onChange={this.handleChange}
                                name="name"
                                type="name"
                                value={this.state.name}
                                placeholder="enter name"
                                className="signup-input-2"
                                />
                                <br></br>
                                <br></br>
                                <br></br>
                            <label className="signup-label">Username</label>
                            <br></br>
                            <br></br>
                            <input onChange={this.handleChange}
                                name="username"
                                type="username"
                                value={this.state.username}
                                className="signup-input-2"
                                placeholder="enter username"
                                />
                                <br></br>
                                <br></br>
                                <br></br>
                            <label className="signup-label">Password</label>
                            <br></br>
                            <br></br>
                            <input onChange={this.handleChange}
                                name="password"
                                type="password"
                                value={this.state.password}
                                className="signup-input-2"
                                placeholder="enter password"
                                />
                                <br></br>
                                <br></br>
                                <br></br>
                            <label className="signup-label">Confirm Password</label>
                            <br></br>
                            <br></br>
                            <input onChange={this.handleChange}
                                name="password_confirmation"
                                type="password"
                                value={this.state.password_confirmation}
                                className="signup-input-2"
                                placeholder="confirm password"
                                />
                                <br></br>
                                <br></br>
                                <br></br>
                            <input className="signup-form-button" type="submit" value="Join"/>

                        </form>
                        { 
                        <h6 id="error" style={{color:"red"}}></h6>
                        }       
                </center>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      signUp: (event, userInput, history) => { dispatch(signUp(event, userInput, history)) }
    }
  }

  const mapStateToProps = (state) => {
    return {
    
        user: state.user
        
      }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)