import React from 'react';
import styles from './Footer.module.scss';
import { ISocialIcons, SocialIcons } from '../socialIcons/SocialIcons';

export interface IFooter {
    socialLinksProps: ISocialIcons;
}

export const Footer: React.FC<IFooter> = ({ socialLinksProps }: IFooter) => {
    return (
        <footer className={styles['footer']}>
            <div className={styles['container']}>
                <div className={styles['footer__inner']}>
                    <SocialIcons {...socialLinksProps} />
                </div>
            </div>
        </footer>
    )
}