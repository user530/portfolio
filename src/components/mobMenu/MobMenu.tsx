import React from 'react';
import styles from './MobMenu.module.scss';
import { INavbar, Navbar } from '../navbar/Navbar';
import { ISocialIcons, SocialIcons } from '../socialIcons/SocialIcons';

interface IMobMenu {
    isOpen: boolean;
    clickHandler: (...args: any[]) => void;
    navbarProps: INavbar;
    socialIconsProps: ISocialIcons;
}

export const MobMenu: React.FC<IMobMenu> = ({ isOpen, clickHandler, navbarProps, socialIconsProps }: IMobMenu) => {
    return (
        <div className={
            [
                styles['mobile-menu'],
                isOpen ? styles['mobile-menu--open'] : '',
            ].join(' ')
        }>
            <Navbar links={navbarProps.links.map(link => ({ ...link, clickHandler }))} isMobile={true} />
            <SocialIcons {...socialIconsProps} />
        </div>
    )
}