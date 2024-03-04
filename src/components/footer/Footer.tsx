import React from 'react';
import styles from './Footer.module.scss';
import { SocialIcons } from '../socialIcons/SocialIcons';
import { FaWhatsapp, FaTelegram, FaLinkedin, FaPhoneAlt } from 'react-icons/fa';

const socialLinks = [
    { icon: FaPhoneAlt, href: 'tel:+79271557757', },
    { icon: FaWhatsapp, href: 'https://api.whatsapp.com/send?phone=79271557757', },
    { icon: FaTelegram, href: 'https://t.me/@tmv95' },
    { icon: FaLinkedin, href: 'www.linkedin.com/in/magomed-timarsuev-7249581aa', newTab: true },
];

export const Footer: React.FC = () => {
    return (
        <footer className={styles['footer']}>
            <div className={styles['container']}>
                <div className={styles['footer__inner']}>
                    <SocialIcons icons={socialLinks} />
                </div>
            </div>
        </footer>
    )
}