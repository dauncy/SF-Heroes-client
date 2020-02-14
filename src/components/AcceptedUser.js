import React, {Component} from 'react'

class AcceptedUser extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            
                <div className="theUsers">
                    

                    <div>
                    <h6 className="accepted-username">{this.props.userData.username}</h6>
                    
                    </div>
                    
                </div>
           
        )
    }
}

export default AcceptedUser