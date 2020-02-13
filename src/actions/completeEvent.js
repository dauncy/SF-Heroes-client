const completeEvent =(event, data, history) => {
    return (dispatch) => {
        
        return fetch(`http://localhost:3000/community-events/${data.issueId}`, {
            method: "PATCH",
            headers:{
             "Content-type": "application/json",
             'Accept': 'application/json',
             'Authorization': `Bearer ${localStorage.getItem("jwt")}`
            },
            body: JSON.stringify({community_event: {
                status: "Closed"
            }})
            
         } )
         .then(response => response.json())
         .then(json => {  let user = json.users.filter(user => user.id === data.userId); 
            dispatch({type: "SET_USER_EVENTS", userEvents: user[0].community_events})
            // console.log(user[0].community_events)
        })
             
    }
}

export default completeEvent