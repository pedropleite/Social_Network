import { ContainerFooter, Icons, Brand } from './styles';
import IconFacebook from '../../assets/icons/facebook.png';
import IconInstagram from '../../assets/icons/instagram.png';
import IconTwitter from '../../assets/icons/twitter.png';
import IconWhatsapp from '../../assets/icons/whatsapp.png';

export const Footer = () => {
    return (
        <ContainerFooter>
            <h3>Write about what you are interested in</h3>
            <Brand>
                So<div>c</div>ial
            </Brand>
            <Icons>
                <img src={IconFacebook} alt="Facebook" />
                <img src={IconInstagram} alt="Instagram" />
                <img src={IconTwitter} alt="Twitter" />
                <img src={IconWhatsapp} alt="Whatsapp" />
            </Icons>
            <p>Copyright © 2022. All rights reserved.</p>
        </ContainerFooter>
    );
};
