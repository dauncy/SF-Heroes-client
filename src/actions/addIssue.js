const addIssue = (event, issueData, history) => {
   
    
    return (dispatch) => {
       
        return fetch("http://localhost:3000/commitments", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem("jwt")}`
            }, 
            body: JSON.stringify({user_event:{
                user_id: issueData.user_id,
                community_event_id: issueData.community_event_id
            }})
        }).then(response => response.json())
            .then(json => { console.log(json);
                if(json.error){
                    console.log(json.error)
                    
                } else {
                    
                    dispatch({type: "SET_USER_EVENTS", userEvents: json.user.community_events})
                    history.push('/profile')
                    
                }
            })
    }
}

export default addIssue