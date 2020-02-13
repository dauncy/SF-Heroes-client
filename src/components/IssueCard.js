import React, {Component} from 'react';
import NewCommentForm from './NewCommentForm';
import Comment from './Comment';
import AcceptedUser from './AcceptedUser';
import {connect} from 'react-redux';
import addIssue from '../actions/addIssue';
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
        .then(json => { console.log(json); this.setState({issueData: json})})
    }

    addIssue =(event)=>{
        let issueData = {
          user_id: this.props.user.id,
          community_event_id: this.state.issueData.id
        }
    
        this.props.addIssue(event, issueData, this.props.history)
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
            <div className="issue-page">
                <center>
                    <div className="issue-scroll">
                    <div className="issue-page-container">
                        <img className="issue-page-img" src={this.state.issueData.media_url}></img>
                        <h1 className="issue-page-title">{this.state.issueData.title}</h1>
                        {this.props.userEvents.filter(issue => issue.id === this.state.issueData.id).length===1 && this.state.issueData.status === "Accepted" ? <p className="oops-page">already addedd</p> : 
            this.state.issueData.status === "Closed" ? <p className="oops-page">already completed</p> :<button onClick={this.addIssue}className="issue-page-button">Add To Que</button>}
                        <p className="issue-page-details">{this.state.issueData.id && this.state.issueData.service_details.replace(/_/g, " ")}</p>
                        
                        
                        <p className="issue-page-address">{this.state.issueData.address}</p>
                        <p className="issue-page-district">{this.state.issueData.district}</p>
                        <p className="issue-page-date">Complaint made: {this.state.issueData.id && this.state.issueData.created_at.slice(0, 10)}</p>
                        <p className="issue-page-status">status: {this.state.issueData.status}</p>
                     </div>
                     </div>
                     </center>
                     <div className="other-container">
                     <div className="users-going">
                        {this.state.issueData.id && this.state.issueData.users.length === 0? <p className="nobody">Nobody has signed up to help. Add to que and become the first!</p> :
                        this.state.issueData.id && this.state.issueData.users.map(user => <AcceptedUser userData={user}/>)}
                     </div>
                    
                     <br></br>
                     <div className="comments-container">
                     <h4 className="comment-title">Comments</h4>
                     <br></br>
                         <div className="all-comments">
                     
        <div>{this.state.issueData.id && this.state.issueData.comments.length > 0 ? this.state.issueData.comments.map(comment => <Comment data={comment} />) : <p className="nobody">looks like there are no comments... be the first!</p>}
                         
        </div>
                     </div>
                     <NewCommentForm handlePost={this.handlePost} issueId={this.state.issueData.id}/>
                     </div>
                     </div> 
                
                
            </div>
        )
    }
}

const mapStateToProps =(state)=>{
    return{
        user: state.user.currentUser,
        userEvents: state.user.userEvents
    }
}

const mapDispatchToProps =(dispatch) => {
    return{
        addIssue: (event, issueData, history) => {dispatch(addIssue(event, issueData, history))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IssueCard)