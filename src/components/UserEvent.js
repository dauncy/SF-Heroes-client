import React, {Component} from 'react'

class UserEvent extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <center>
            <div className="issue-card">
                <img className="issue-card-img"src={this.props.data.media_url}></img>
                <h3 className="issue-card-title">{this.props.data.title}</h3>
                <button className="issue-card-button">Complete</button>
                <p className="issue-card-details">{this.props.data.service_details.replace(/_/g, " ")}</p>
                <p className="issue-card-address">{this.props.data.address}</p>
                <p className="issue-card-date">Date Accepted: {this.props.data.updated_at.slice(0, 10)}</p>
            </div>
            <br></br>
            </center>
            </div>
        )
    }
}

export default UserEvent