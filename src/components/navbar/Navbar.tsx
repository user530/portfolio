import React from 'react';
import styles from './Navbar.module.scss';

interface NavigationLink {
    name: string;
    href: string;
    newTab?: boolean;
    clickHandler?: (...args: any[]) => void;
}

export interface INavbar {
    links: NavigationLink[];
    isMobile?: boolean;
}

export const Navbar: React.FC<INavbar> = ({ links, isMobile }: INavbar) => {
    return (
        <nav
            className={
                [
                    styles['nav-bar'],
                    isMobile ? styles['nav-bar--mobile'] : ''
                ].join(' ')
            }
        >
            {
                links.map(
                    ({ name, href, newTab, clickHandler }, ind) =>
                    (
                        <a
                            key={name + ind}
                            className={styles['nav-bar__btn']}
                            href={href}
                            target={newTab ? '_blank' : '_self'}
                            rel={newTab ? 'noreferrer' : 'bookmark'}
                            onClick={clickHandler || undefined}
                        >{name}</a>
                    )
                )
            }
        </nav >
    )
} 