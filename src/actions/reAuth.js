const reAuth =(history)=>{
    return(dispatch) => {
        return fetch("http://localhost:3000/profile", {
            method: "POST",
            headers: {
             "Content-type": "application/json",
             'Accept': 'application/json',
             'Authorization': `Bearer ${localStorage.getItem("jwt")}`
            }
       
          }).then(response => response.json())
          .catch((error) => {
            // console.log(error)
            // return error
            if (error) {
            return window.alert('Turn on the server dumbass') 
          }
          else {
          return window.alert("Oh my. Something has gone terribly wrong.")
          }
        }).then(json => {console.log(json); if(json.user !== undefined){
            dispatch({type: "RE_AUTH", user: json.user.data.attributes})
        } else{console.log("sup bro")}}).catch(() => {
            console.log("Cannot connect to server.")
          })
        
            
      
    }
}
//  dispatch({ type: "SET_CURRENT_USER", user: json.user.data.attributes })

export default reAuth