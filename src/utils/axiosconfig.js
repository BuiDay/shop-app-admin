const getToken = localStorage.getItem("user") 
        ? JSON.parse(localStorage.getItem("user"))
        :null;

export const config = {
    headers:{
        Authorization:`Bearer ${getToken.data.token}`,
        Accept:"application/json"
    }
}

