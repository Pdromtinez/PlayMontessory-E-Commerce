export default async function isUserAdmin() {
    try {
        const cookieString = document.cookie;
        const tokenValue = cookieString.split('=')[1];

        const response = 
        await fetch('http://localhost:6700/playmontessori/users', {
            method: 'GET',
            headers: {
                'Authorization': `${tokenValue}`
            }
        });
        const data = await response.json();

        const user = data.userRole
        
        if (user === "admin"){
            return true
        }else {
            return false
        }


    } catch (error) {
        console.error(error);
        return false;
    }
}

isUserAdmin()