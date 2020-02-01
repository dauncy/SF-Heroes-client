import React, { Component } from 'react';
import { connect } from 'react-redux'
import signUp from '../actions/signUp'

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

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
          })
     }

    render(){
        return(
            <div>
                <center>
                    <h3>account info</h3>
                        <form onSubmit={(event) => {this.props.signUp(event, this.state, this.props.history)}}>
                            <label>Name</label>
                            <br></br>
                            <input onChange={this.handleChange}
                                name="name"
                                type="name"
                                value={this.state.name}
                                />
                                <br></br>
                            <label>Username</label>
                            <br></br>
                            <input onChange={this.handleChange}
                                name="username"
                                type="username"
                                value={this.state.username}
                                />
                                <br></br>
                            <label>Password</label>
                            <br></br>
                            <input onChange={this.handleChange}
                                name="password"
                                type="password"
                                value={this.state.password}
                                />
                                <br></br>
                            <label>Confirm Password</label>
                            <br></br>
                            <input onChange={this.handleChange}
                                name="password_confirmation"
                                type="password"
                                value={this.state.password_confirmation}
                                />
                                <br></br>
                            <input type="submit" value="create user"/>

                        </form>
                        { 
                        <h6 id="error" style={{color:"red"}}></h6>
                        }       
                </center>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      signUp: (event, userInput, history) => { dispatch(signUp(event, userInput, history)) }
    }
  }

export default connect(null, mapDispatchToProps)(SignUp)