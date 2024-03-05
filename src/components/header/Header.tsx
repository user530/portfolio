import React from 'react';
import styles from './Header.module.scss';
import { useMediaQuery } from 'react-responsive';
import { FaEnvelope } from "react-icons/fa";
import { ILogo, Logo } from '../logo/Logo';
import { INavbar, Navbar } from '../navbar/Navbar';
import { ContactBtn, IContactBtn } from '../contactBtn/ContactBtn';
import { MobMenuBtn } from '../mobMenuBtn/MobMenuBtn';
import { MobMenu } from '../mobMenu/MobMenu';
import { ISocialIcons } from '../socialIcons/SocialIcons';

export interface IHeader {
    logoProps: ILogo;
    navbarProps: INavbar;
    contactBtnProps: IContactBtn;
    socialIconsProps: ISocialIcons;
}

export const Header: React.FC<IHeader> =
    ({ logoProps, navbarProps, contactBtnProps, socialIconsProps }: IHeader) => {
        return (
            <header className={styles['header']}>
                <div className={styles['container']}>
                    <div className={styles['header__content']}>

                        <DefaultHeader
                            logoProps={logoProps}
                            navbarProps={navbarProps}
                            contactBtnProps={contactBtnProps}
                        />

                        <MobileHeader
                            logoProps={logoProps}
                            navbarProps={navbarProps}
                            socialIconsProps={
                                {
                                    icons: [
                                        { icon: FaEnvelope, href: contactBtnProps.href },
                                        ...socialIconsProps.icons,
                                    ]
                                }}
                        />

                    </div>
                </div>
            </header>
        )
    }

interface IMobileHeader {
    logoProps: ILogo;
    navbarProps: INavbar;
    socialIconsProps: ISocialIcons;
}

const MobileHeader: React.FC<IMobileHeader> = ({ logoProps, navbarProps, socialIconsProps }: IMobileHeader) => {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false);

    const clickHandler = () => {
        setIsMenuOpen(prev => !prev);
    }

    React.useEffect(
        () => {
            // Toggle body scroll
            document.body.style.overflow = isMenuOpen === true ? 'hidden' : 'auto';
        },
        [isMenuOpen]
    )

    return isMobile
        ? <>
            <Logo {...logoProps} />
            <MobMenuBtn isOpen={isMenuOpen} clickHandler={clickHandler} />
            <MobMenu
                isOpen={isMenuOpen}
                clickHandler={clickHandler}
                navbarProps={navbarProps}
                socialIconsProps={socialIconsProps}
            />
        </>
        : null;
}

interface IDefaultHeader {
    logoProps: ILogo;
    navbarProps: INavbar;
    contactBtnProps: IContactBtn;
}

const DefaultHeader: React.FC<IDefaultHeader> = ({ logoProps, navbarProps, contactBtnProps }: IDefaultHeader) => {
    const isDefault = useMediaQuery({ minWidth: 768 });

    return isDefault
        ? <>
            <Logo {...logoProps} />
            <Navbar {...navbarProps} />
            <ContactBtn {...contactBtnProps} />
        </>
        : null;
}