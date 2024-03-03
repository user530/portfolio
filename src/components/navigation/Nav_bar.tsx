import React from 'react';
import styles from './Nav_bar.module.scss';
import { FaCat } from "react-icons/fa";

export const Navbar: React.FC = () => {
    return (
        <header className={styles['header']}>
            <div className={styles['container']}>
                <div className={styles['header__content']}>
                    <a href='/' className={styles['logo']}>
                        <FaCat className={styles['logo__icon']} />
                        <span className={styles['logo__text']}>TMV</span>
                    </a>

                    <nav className={styles['nav-bar']}>
                        <a className={styles['nav-bar__btn']} href="#!" target='_blank' rel="noreferrer">Portfolio</a>
                        <a className={styles['nav-bar__btn']} href="#!" target='_blank' rel="noreferrer">About</a>
                        <a className={styles['nav-bar__btn']} href="https://github.com/user530" target='_blank' rel="noreferrer" >GitHub</a>
                    </nav>

                    <button className={styles['contact-btn']}>
                        Contact
                    </button>
                </div>
            </div>
        </header>
    )
}