
import jwt from 'jsonwebtoken';



export function isUserAdmin() {
    const [token, setToken] = useState('');

    useEffect(() => {
    const tokenFromCookie = cookies.get('token'); 
    if (tokenFromCookie) {
        setToken(tokenFromCookie);
    }});
    
    if (token) {
        const decodedToken = decodeToken(token);
        return decodedToken.role === "isAdmin"; 
    }
    return false;
}

function decodeToken(token) {
    return jwt.decode(token);

}