const filterMap =(event, filterData) => {
    event.preventDefault()
    return(dispatch) => {
        dispatch({ type: "SET_MAP_FILTERS", filters: filterData})
        
    }
}

export default filterMap