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

    componentDidUpdate(previousProps){
        if(previousProps.user.currentUser !== this.props.user.currentUser){
        const user_id = this.props.user.currentUser.id
        const old_name = this.props.user.currentUser.name
        const old_username = this.props.user.currentUser.username
        this.setState({id: user_id, old_name: old_name, old_username: old_username})}
    }
    
    handleChange =(event)=>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render(){
        
        return(
            <div className="edit-profile-page">
                <center>
                    <h3 className="edit-title">Update Some Info</h3>
                        <form onSubmit={(event) => {this.props.editProfile(event, this.state, this.props.history)}}>
                            <label className="edit-label-1">Username Change?</label>
                            <br></br>
                            <input onChange={this.handleChange}
                                type="username"
                                name="username"
                                value={this.state.username}
                                placeholder="new username"
                                className="edit-input"/>
                                <br></br>
                                <br></br>
                            <label className="edit-label-2">Name Change?</label>
                            <br></br>
                            <input onChange={this.handleChange}
                                className="edit-input"
                                type="name"
                                name="name"
                                value={this.state.name}
                                placeholder="new name"/>

                                <br></br>
                            <input className="updateButton" type="submit" value="update info"/>
                        </form>
                        <p id="edit-error"></p>
                        
                        <div className="delete-container">
                        <h5 className="delete-title">Become a Villain :(</h5>
                        <button className="deleteButton" onClick={() => {this.props.deleteProfile( this.state.id, this.props.history)}}>Delete Account</button>
                        </div>
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