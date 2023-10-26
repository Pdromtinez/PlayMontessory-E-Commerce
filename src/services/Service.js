const API_URL =  "http://localhost:6700/playmontessori/"

export const apiReq = {
    postProducts: async (customHeaders) =>{
        fetch(`${API_URL}users`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                ...customHeaders,
            }
          });
    }
}