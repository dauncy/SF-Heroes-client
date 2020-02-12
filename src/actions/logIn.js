
const logIn = (event, userInput, history) => {
    event.preventDefault()
    return (dispatch) => {
        
        return fetch('http://localhost:3000/login', {
            method: "POST",
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }, 
            body: JSON.stringify({
                user: {
                    username: userInput.username,
                    password: userInput.password
                }
            })
         } )
         .then(response => response.json())
         .then(json => { console.log(json);
             if(json.error){
                let message = document.getElementById("login-title")
                message.innerText = json.error
                message.style.color= "red"
                
             } else {
                dispatch({ type: "SET_CURRENT_USER", user: json.user.data.attributes })
                dispatch({type: "SET_USER_EVENTS", userEvents: json.user.data.relationships.community_events.data})
                localStorage.setItem('jwt', json.jwt);
                history.push('/profile')
             }
         })
    }
}

export default logIn