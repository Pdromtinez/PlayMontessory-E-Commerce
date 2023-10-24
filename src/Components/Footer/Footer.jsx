import "./Footer.css";
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import facebookIcon from '../../assets/imgFooter/Facebook1.png';
import instagramIcon from '../../assets/imgFooter/Instagram1.png';
import tiktokIcon from '../../assets/imgFooter/TikTok1.png';



function Footer () {
    return(
        <Container className="container-footer">
            <div className="div-footer">
                
                <ul className="social-icons p-2 d-flex justify-content-around">
                    <li className="social-icons-footer text-primary">
                        <a href="#facebook"><Image src={facebookIcon} alt="Facebook" className="social-icon"/></a></li>
                    <li><a href="#instagram"><Image src={instagramIcon} alt="Instagram" className="social-icon"/></a></li>
                    <li><a href="#tiktok"><Image src={tiktokIcon} alt="TikTok" className="social-icon"/></a></li>
                </ul>
                <ul className="end-footer p-2 d-flex justify-content-center text-primary">
                    <h6>© 2023 PlayMontessori. All rights reserved.</h6>
                </ul>
            </div>
        </Container>
    )
}
export default Footer;