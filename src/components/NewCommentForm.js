import React, {Component} from 'react';
import { connect } from 'react-redux';

class NewCommentForm extends Component{
    constructor(){
        super()
        this.state = {
            content: ""

        }
    }

    handleChange =(event)=>{
        this.setState({content: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        fetch('http://localhost:3000/comments', {
            method: "POST", 
            headers: {
                "Content-type": "application/json",
                'Accept': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem("jwt")}`
            },
            body: JSON.stringify({comment: {
                user_id: this.props.user.id,
                community_event_id: this.props.issueId,
                content: this.state.content
            }})
        }).then(response => response.json())
        .then(json => this.props.handlePost(event, json))
        this.setState({content: ""})
    }

    render(){
        return(
            <div>
                <center>
                <form onSubmit ={this.handleSubmit}>
                    <label>Post a Comment</label>
                    <br></br>
                    <textarea
                        value={this.state.content}
                        onChange={this.handleChange}
                        placeholder="share your concerns"/>

                        <br></br>
                    <input
                        type="submit" value="POST"/>
                </form>
                </center>
            </div>
        )
    }
}

const mapStateToProps =(state)=>{
    return {
        user: state.user.currentUser
    }
}

export default connect(mapStateToProps, null)(NewCommentForm)