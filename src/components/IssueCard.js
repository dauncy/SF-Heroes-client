import React, {Component} from 'react';
import NewCommentForm from './NewCommentForm';
import Comment from './Comment';
import {connect} from 'react-redux';
class IssueCard extends Component{
    constructor(){
        super()
        this.state ={
            issueData: {}
        }
    }

    componentDidMount(){
        let id = this.props.match.params.id
        fetch(`http://localhost:3000/community-events/${id}`,{
            headers: {
                "Content-type": "application/json",
                'Accept': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem("jwt")}`
            }
        }).then(response => response.json())
        .then(json => this.setState({issueData: json}))
    }

    handlePost =(event, comment)=>{
        const newComment={
            content: comment.content,
            user: this.props.user
        }
        this.setState(previousState=> {previousState.issueData.comments.push(newComment); return previousState})
    }

    render(){
        return(
            <div>
                <center>
                    <img className="issue-page-image" src={this.state.issueData.media_url}></img>
                    <h1>{this.state.issueData.title}</h1>
                    <h2>{this.state.issueData.id && this.state.issueData.service_details.replace(/_/g, " ")}</h2>
                    <h2>Complaint made: {this.state.issueData.id && this.state.issueData.created_at.slice(0, 10)}</h2>
                     <h2>{this.state.issueData.district}</h2>
                     <h4>{this.state.issueData.address}</h4>
                     <h2>status: {this.state.issueData.status}</h2>
                     
                     <h4>Comments</h4>
        <ul>{this.state.issueData.id && this.state.issueData.comments.length > 0 ? this.state.issueData.comments.map(comment => <Comment data={comment} />) : <p>looks like there are no comments... be the first!</p>}
                         
                     </ul>
                        
                </center>
                <NewCommentForm handlePost={this.handlePost} issueId={this.state.issueData.id}/>
            </div>
        )
    }
}

const mapStateToProps =(state)=>{
    return{
        user: state.user.currentUser
    }
}

export default connect(mapStateToProps, null)(IssueCard)