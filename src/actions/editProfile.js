const editProfile = (event, userInput, history) => {
    event.preventDefault()
    let Newname;
    let newUsername;
    if (userInput.name === ""){
        Newname = userInput.old_name
    } else {
     Newname = userInput.name
    }

    if (userInput.username ===""){
        newUsername = userInput.old_username
    } else {
        newUsername = userInput.username
    }
    
    return (dispatch) => {
       
        return fetch(`http://localhost:3000/users/${userInput.id}`, {
            method: "PATCH",
            headers: {
             "Content-type": "application/json",
             'Accept': 'application/json',
             'Authorization': `Bearer ${localStorage.getItem("jwt")}`
            },
            body: JSON.stringify({user:{
                name: Newname,
                username: newUsername
               
            }})
        }).then(response => response.json())
            .then(json => { console.log(json);
                if(json.error){
                    let message = document.getElementById("edit-error")
                    message.innerText = json.error
                } else {
                    dispatch({ type: "EDIT_PROFILE", user: json.user.data.attributes })
                    
                    
                }
            }).then(()=>{history.push("/profile")})
    }
}

export default editProfile