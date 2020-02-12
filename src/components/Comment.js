import React, {Component} from 'react'

class Comment extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }

    render(){
        return(
            <div>
    <p>{this.props.data.user.username}:   {this.props.data.content}</p>
            </div>
        )
    }
}

export default Comment