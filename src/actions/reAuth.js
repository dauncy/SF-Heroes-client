const reAuth =(a)=>{
    return(dispatch) => {
        return fetch("http://localhost:3000/profile", {
            method: "GET",
            headers: {
             "Content-type": "application/json",
             'Accept': 'application/json',
             'Authorization': `Bearer ${localStorage.getItem("jwt")}`
            }
       
          }).then(response => response.json())
          .then(json => {if(json.user === undefined ){console.log("ew")} 
          else{ dispatch({type: "RE_AUTH", user: json.user.data.attributes})}
       })
    }
}


export default reAuth