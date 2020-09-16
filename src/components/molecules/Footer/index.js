import React from 'react';
import { ICFacebook, ICTwitter, ICIntagram, ICYoutube, ICTwitch, ICGithub, LogoWeb } from '../../../assets';
import './footer.scss';

const Icon = ({img}) => {
    return (
        <div className="icon-wrapper">
            <img className="icon-medsos" src={img} alt="Icon" />
        </div>
    )
}

const Footer = () => {
    return (
        <div>
            <div className="footer">
                <div>
                    <img className="logo" src={LogoWeb} alt="Logo" />
                </div>
                <div className="social-wrapper">
                    <Icon img={ICFacebook} />
                    <Icon img={ICTwitter} />
                    <Icon img={ICIntagram} />
                    <Icon img={ICYoutube} />
                    <Icon img={ICTwitch} />
                    <Icon img={ICGithub} />
                </div>
            </div>
            <div className="copyright">
                <p>Copyright &copy; 2020 Fariz All Right Reserved</p>
            </div>
        </div>
    )
}

export default Footer;
