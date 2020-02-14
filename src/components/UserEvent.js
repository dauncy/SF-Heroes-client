import React, {Component} from 'react'

class UserEvent extends Component{
    constructor(props){
        super(props)
    }

    completeEvent =(event)=>{
        let data = {
            userId: this.props.user.id,
            issueId: this.props.data.id
        }
        this.props.completeEvent(event, data, this.props.history)
    }

    visitPage =(event)=>{
        let slugId = this.props.data.id
        this.props.history.push(`/issues/${slugId}`)
    }

    render(){
        return(
            <div>
                <center>
            <div className="issue-card">
                <img className="issue-card-img"src={this.props.data.media_url}></img>
                <h3 className="issue-card-title">{this.props.data.title}</h3>
                {this.props.data.status === "Accepted" ? <><button onClick={this.completeEvent} className="issue-card-button">Complete</button>
                <button className= "issue-card-button-page" onClick={this.visitPage}>issue page</button></>: (<button className= "issue-card-button-page2" onClick={this.visitPage}>issue page</button>)}
                
                <p className="issue-card-details">{this.props.data.service_details.replace(/_/g, " ")}</p>
                <p className="issue-card-address">{this.props.data.address}</p>
                {this.props.data.status === "Accepted" ? <p className="issue-card-date">Date Accepted: {this.props.data.updated_at.slice(0, 10)}</p> : 
                    <p className="issue-card-date">Completed on: {this.props.data.updated_at.slice(0, 10)}</p> }
            </div>
            <br></br>
            </center>
            </div>
        )
    }
}

export default UserEvent