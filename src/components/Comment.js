import React, {Component} from 'react'

class Comment extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }

    render(){
        console.log(this.props.data)
        return(
            <div className="comment-card">
                <h6 className="comment-username">{this.props.data.user.username}:</h6>
                <p className="comment-content">{this.props.data.content}</p>
    
            </div>
        )
    }
}

export default Comment