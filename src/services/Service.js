const API_URL =  "https://playmontessori.onrender.com/playmontessori/"

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