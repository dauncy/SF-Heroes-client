import Headers from '../components/services/constants'
const logIn = (event, userInput, history) => {
    event.preventDefault()
    return (dispatch) => {
        
        return fetch('http://localhost:3000/login', {
            method: "POST",
            headers:Headers, 
            body: JSON.stringify({
                user: {
                    username: userInput.username,
                    password: userInput.password
                }
            })
         } )
         .then(response => response.json())
         .then(json => {
             if(json.error){
                let message = document.getElementById("login-error")
                message.innerText = json.error
             } else {
                dispatch({ type: "SET_CURRENT_USER", user: json.user.data.attributes })
                localStorage.setItem('jwt', json.jwt)
             }
         }).then(()=> {history.push('/profile')})
    }
}

export default logIn