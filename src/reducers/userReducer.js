const intitialState = {
    
    currentUser: {}
}

const userReducer = (state = intitialState, action) => {
    switch(action.type){
        case "SET_CURRENT_USER":
            return {...state, currentUser: action.user}
        
        case "CLEAR_CURRENT_USER":
            return {...state, currentUser: {}}
        
        case "RE_AUTH":
            return {...state, currentUser: action.user}

        case "EDIT_PROFILE":
            return {...state, currentUser: action.user}
        
        case "DELET_PROFILE":
            return {...state, currentUser: {}}

        default: 
        return state;
    }
}

export default userReducer;