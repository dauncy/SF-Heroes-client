import Headers from '../components/services/constants'

const signUp = (event, userInput, history) => {
    event.preventDefault()
    
    return (dispatch) => {
       
        return fetch("http://localhost:3000/users", {
            method: "POST",
            headers: Headers, 
            body: JSON.stringify({user:{
                name: userInput.name,
                username: userInput.username,
                password: userInput.password,
                password_confirmation: userInput.password_confirmation
            }})
        }).then(response => response.json())
            .then(json => { console.log(json);
                if(json.error){
                    let message = document.getElementById("error")
                    message.innerText = json.error
                } else {
                    dispatch({ type: "SET_CURRENT_USER", user: json.user.data.attributes })
                    localStorage.setItem('jwt', json.jwt)
                    
                }
            }).then(()=>{history.push("/profile")})
    }
}

export default signUp