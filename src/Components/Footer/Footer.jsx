import "./Footer.css";
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import facebookIcon from '../../assets/imgFooter/facebook.png';
import instagramIcon from '../../assets/imgFooter/instagram.png';
import tiktokIcon from '../../assets/imgFooter/X.png';



function Footer () {
    return(
        <Container className="container-footer">
            <div className="div-footer">
                
                <ul className="social-icons p-2 d-flex justify-content-around">
                    <li className="social-icons-footer text-primary">
                        <a href="#facebook"><Image width ="20" src={facebookIcon} alt="Facebook" className="social-icon"/></a></li>
                    <li><a href="#instagram"><Image width ="20" src={instagramIcon} alt="Instagram" className="social-icon"/></a></li>
                    <li><a href="#tiktok"><Image width ="20" src={tiktokIcon} alt="TikTok" className="social-icon"/></a></li>
                </ul>
                <ul className="end-footer p-2 d-flex justify-content-center text-primary">
                    <h6>© 2023 PlayMontessori. All rights reserved.</h6>
                </ul>
            </div>
        </Container>
    )
}
export default Footer;