

const signUp = (event, userInput, history) => {
    event.preventDefault()
    
    return (dispatch) => {
       
        return fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }, 
            body: JSON.stringify({user:{
                name: userInput.name,
                username: userInput.username,
                password: userInput.password,
                password_confirmation: userInput.password_confirmation
            }})
        }).then(response => response.json())
            .then(json => { console.log(json);
                if(json.error){
                    let message = document.getElementById("signupOops")
                    message.innerText = json.error;
                    message.style.color = "red"
                    
                    
                } else {
                    dispatch({ type: "SET_CURRENT_USER", user: json.user.data.attributes })
                    dispatch({type: "SET_USER_EVENTS", userEvents: json.user.included.map(issue => issue.attributes)})
                    localStorage.setItem('jwt', json.jwt)
                    history.push('/profile')
                }
            })
    }
}

export default signUp