const deleteProfile = ( userId, history) => {
    
    return (dispatch) => {
        
        return fetch(`http://localhost:3000/users/${userId}`, {
            method: "DELETE",
            headers:{
             "Content-type": "application/json",
             'Accept': 'application/json',
             'Authorization': `Bearer ${localStorage.getItem("jwt")}`
            }
            
         } )
         .then(
             dispatch({ type: "DELETE_USER"}),
             localStorage.removeItem('jwt'))
             .then(()=> {history.push('/')})
    }
}

export default deleteProfile

