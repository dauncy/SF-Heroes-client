const intitialState = {
    
    AllMap: [],
    mapFilters: { },
    displayMap: null
}

const mapReducer = (state = intitialState, action) => {
    switch(action.type){
        case "SET_MAP_FILTERS":
         
            return {...state, mapFilters: action.filters}

        
        case "GET_ALL_MAP":
            return {...state, AllMap: action.AllMap}
        

        default: 

        case "SET_DISPLAY_MAP":
            return {...state, displayMap: action.displayMap}
        return state;
    }
}

export default mapReducer;