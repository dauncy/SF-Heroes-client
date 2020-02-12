const fetchAllMap =() => {
    
    return(dispatch) => {
        return fetch("http://localhost:3000/community-events", {
            headers: {
                "Content-type": "application/json",
                'Accept': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem("jwt")}`
            }
        }).then(response => response.json())
        .then(json => {
            dispatch({ type: "GET_ALL_MAP", AllMap: json})
        })

        
        
    }
}

export default fetchAllMap