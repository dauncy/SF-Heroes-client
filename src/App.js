import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Profile from './components/Profile'
import EditProfile from './components/EditProfile'
import reAuth from './actions/reAuth'
import './App.css';


class App extends Component{
  constructor(){
    super()
  }
  
  componentDidMount(){
   this.props.reAuth()
}
  

  render(){
    return(
      <div>
        
       
          <Switch>
            
          <Route exact path="/" component={Home}/>
            {Object.keys(this.props.user.currentUser).length !== 0 ?  
              <Fragment>
                <Route exact path="/profile" component={Profile}/> 
                <Route exact path="/profile/edit" component={EditProfile} />
                
                
                </Fragment> 
                        : 
                <Fragment>
                  
                  <Route exact path="/login" component={Login}/>
                  <Route exact path="/signup" component={SignUp}/>
                 
                </Fragment>}
          </Switch>
         
              
      </div>
    )
  }
}

const mapStateToProps =(state)=> {
  return {
    
    user: state.user
    
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      reAuth: (history) => { dispatch(reAuth(history)) }
  }
}
//   signUp: (event, userInput, history) => { dispatch(signUp(event, userInput, history)) }

export default connect(mapStateToProps, mapDispatchToProps)(App)
