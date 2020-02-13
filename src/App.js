import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Profile from './components/Profile';
// import dotenv from 'dotenv';
import reAuth from './actions/reAuth';
import MapParent from './components/MapParent';
import IssueCard from './components/IssueCard'
import './App.css';


class App extends Component{
  
  
  
  componentDidMount() {
   this.props.reAuth()
  
  }

  

  render(){
   
    return(
      <div>
        
          <NavBar />
          <Switch>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/signup" component={SignUp}/>
          <Route exact path="/" component={Home}/>
          

            {localStorage.getItem("jwt") ?  (
              <Switch>
              
                <Route exact path="/profile" render={(props) => <Profile {...props}/>}/> 
               
                <Route exact path="/map" render={(props) => <MapParent {...props}/>}/>
                <Route exact path="/issues/:id" render={(props) => <IssueCard {...props} />} />
                <Route render={()=> <Redirect to= "/"/>}/>
              </Switch>
             )
                        : 
               (
                  
                  <Redirect to="/"/>
                  
               )
                }
          
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



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
