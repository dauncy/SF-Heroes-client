import React, { Component } from 'react'
import { connect } from 'react-redux'
import editProfile from '../actions/editProfile'
import deleteProfile from '../actions/deleteProfile'

class EditProfile extends Component {
    constructor(){
        super()
        this.state = {
            id: "",
            username: "",
            name: "",
            old_name: "",
            old_username: ""
        }
    }
    
    componentDidMount(){
        const user_id = this.props.user.currentUser.id
        const old_name = this.props.user.currentUser.name
        const old_username = this.props.user.currentUser.username
        this.setState({id: user_id, old_name: old_name, old_username: old_username})
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
                    <h3>Update Some Info</h3>
                        <form onSubmit={(event) => {this.props.editProfile(event, this.state, this.props.history)}}>
                            <label>New Username?</label>
                            <br></br>
                            <input onChange={this.handleChange}
                                type="username"
                                name="username"
                                value={this.state.username}/>
                                <br></br>
                            <label>Name Change?</label>
                            <br></br>
                            <input onChange={this.handleChange}
                                type="name"
                                name="name"
                                value={this.state.name}/>
                                <br></br>
                            <input type="submit" value="update info"/>
                        </form>
                        <p id="edit-error"></p>
                        <br></br>
                        <br></br>
                        <h6>Changed your mind about helping?</h6>
                        <button onClick={() => {this.props.deleteProfile( this.state.id, this.props.history)}}>Delete Account</button>
                </center>
            </div>
        )
    }
}

const mapDispatchToProps =(dispatch) => {
    return {
        editProfile: (event, userInput, history) => { dispatch(editProfile(event, userInput, history)) },
        deleteProfile: ( userId, history) => {dispatch(deleteProfile( userId, history))}
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(EditProfile)