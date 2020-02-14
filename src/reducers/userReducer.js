const intitialState = {
    
    currentUser: {},
    userEvents: []
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
        
        case "DELETE_PROFILE":
            return {...state, currentUser: {}}

        case "SET_USER_EVENTS":
            return{...state, userEvents: action.userEvents}
        
        
        default: 
        return state;
    }
}

export default userReducer;