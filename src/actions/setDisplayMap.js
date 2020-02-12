import CommunityEventMap from "../components/CommunityEventMap"

const setDisplayMap =(filterData, allMap) => {
    
  
    return(dispatch) => {
        let url = 'http://localhost:3000/community-events?'
        let params = filterData
        if(params.district !== " "){
        url += `district=${params.district}&`}

        for(let i = 0; i < params.title.length; i++){
             url +=`title[]=${params.title[i]}&`
        }
        
        for(let i = 0; i < params.status.length; i++){
            url += `status[]=${params.status[i]}&`
        }

        return fetch(url, {
            headers: {
                "Content-type": "application/json",
                'Accept': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem("jwt")}`
            }
        }).then(response => response.json())
        .then(json => { 
            
            dispatch({ type: "SET_DISPLAY_MAP", displayMap: json})
        })
        
        }
        
     
}

export default setDisplayMap