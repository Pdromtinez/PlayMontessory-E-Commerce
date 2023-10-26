import "./Footer.css";
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import facebookIcon from '../../assets/imgFooter/facebook.png';
import instagramIcon from '../../assets/imgFooter/instagram.png';
import Twitter from '../../assets/imgFooter/X.png';
import {Link} from "react-router-dom";



function Footer () {
    return(
        <Container className="container-footer">
            <div className="div-footer">
                
                <ul className="social-icons p-2 d-flex justify-content-around">
                    <li className="social-icons-footer text-primary">
                        <Link to="http://www.facebook.com" target="_blank" ><Image width ="20" src={facebookIcon} alt="Facebook" className="social-icon"/></Link></li>
                    <li><Link to="http://www.instagram.com" target="_blank"><Image width ="20" src={instagramIcon} alt="Instagram" className="social-icon"/></Link></li>
                    <li><Link to="http://www.twitter.com" target="_blank"><Image width ="20" src={Twitter} alt="X" className="social-icon"/></Link></li>
                </ul>
                <ul className="end-footer p-2 d-flex justify-content-center text-primary">
                    <h6>© 2023 PlayMontessori. All rights reserved.</h6>
                </ul>
            </div>
        </Container>
    )
}
export default Footer;