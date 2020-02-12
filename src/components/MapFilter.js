import React, {Component} from 'react';
import {districtArray} from './services/constants';
import {typeArray} from './services/constants';
import { connect } from 'react-redux';
import filterMap from '../actions/filterMap';
import setDisplayMap from '../actions/setDisplayMap';


class MapFilter extends Component{
    constructor(){
        super()
        this.state= {
            district: " ",
            title: [],
            status: [ ]
        }
    }

    componentWillUpdate() {
        this.initialState = { district: " ", title: [], status: [ ]}
    }

    handleSubmmit =(event)=>{
        this.props.filterMap(event, this.state)
        this.props.setDisplayMap(this.state, this.props.allMap)
        let checkbox = document.getElementsByClassName("checkbox")
        
        for(let i =0; i<checkbox.length; i++){
            checkbox[i].checked = false
        }
        this.setState(this.initialState)
         
         
    }
    

    handleDropDown =(event)=>{
        
        this.setState({district: event.target.value})
    }

    handleCheck =(event) =>{
        const target =event.target
        console.log(target.checked)
        const value= event.target.value
        let name = event.target.name
       let i = this.state[`${name}`].indexOf(value)
        this.setState((previousState)=>{ previousState[name].includes(value) ? 
              previousState[name].splice(i, 1)
              :
            previousState[name].push(value); return previousState})
    }

    render(){
       
        return(
            <div className="filter">
                <div className="district">
             
                </div>
                    <div className="dropdown-div">
                    <select className="dropdown" onChange={this.handleDropDown} >
                        <option value=" ">Please Select A District</option>
                        {districtArray.map((district)=> 
                            <option   value={district}>{district}</option>
                        )}
                    </select>
                    </div>
                <div >
                <h4 className="status-title">Status: select all that apply</h4>
                </div>
              <form className="status-filter">
                  <div className="status">
                      
                    <label className="status-label">open</label>
                    <input 
                        className="checkbox"
                        name="status"
                        type="checkbox"
                        value="Open"
                        id="statusly"
                        
                        onClick={this.handleCheck}
                        />
                        <br></br>
                        <label className="status-label">accepted</label>
                        <input 
                        className="checkbox"
                            name="status"
                            type="checkbox"
                            value="Accepted"
                            id="statusly"
                            onClick={this.handleCheck}/>
                            <br></br>
                        <label className="status-label">closed</label>
                       
                        <input 
                        className="checkbox"
                            name="status"
                            type="checkbox"
                            value="Closed"
                            id="statusly"
                            onClick={this.handleCheck}/>
                    </div>
                    <div>
                        <div className="status-title">
                        <h5 className="sort-by"> Sort By</h5>
                        </div>
                            <form>
                               
                                    {typeArray.map((type) => 
                                    <div>
                                    <label className="checkbox-label">{type}</label>
                                    <input name="title"
                                    className="checkbox"
                                    value={type}
                                    type="checkbox"
                                    onClick ={this.handleCheck}/>
                                    <br></br>
                                    </div>)}
                               

                            </form>
                            
                    </div>
              </form>
              <br></br>
              <button type="submit" onClick={this.handleSubmmit} className="search-button">Search</button>
        </div>
            
        )
    }
}

const mapDispatchToProps =(dispatch)=>{
    return {
        filterMap: (event, filterData) => { dispatch(filterMap(event, filterData)) },
        setDisplayMap: (filterData, allMap) => {dispatch(setDisplayMap(filterData, allMap))}
    }
}

const mapStateToProps =(state)=>{
    return {
        allMap: state.map.AllMap
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MapFilter)