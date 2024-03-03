import React from 'react';
import styles from './Nav_bar.module.scss';
import { FaCat } from "react-icons/fa";
import { MdMenu, MdOutlineClose } from "react-icons/md";

export const Navbar: React.FC = () => {
    const [width, setWidth] = React.useState<number>(window.innerWidth);
    const [menuOpen, setMenuOpen] = React.useState<boolean>(false);
    const burgerMenu = React.useRef<HTMLElement>(null);

    const handleMenuClick = React.useCallback(() => {
        setMenuOpen(prev => !prev);
    }, [])

    React.useEffect(
        () => {
            // Toggle body overflow
            const bodyEl = document.body;
            bodyEl.style.overflow = menuOpen === true ? 'hidden' : 'auto';

            // Toggle class
            burgerMenu.current?.classList.toggle(styles['nav-bar--open']);
        },
        [menuOpen]
    )

    React.useEffect(
        () => {
            const resizeHandler = () => setWidth(window.innerWidth);
            window.addEventListener('resize', resizeHandler);

            return () => window.removeEventListener('resize', resizeHandler);
        },
        []
    )

    return (
        <header className={styles['header']}>
            <div className={styles['container']}>
                <div className={styles['header__content']}>
                    <a href='/' className={styles['logo']}>
                        <FaCat className={styles['logo__icon']} />
                        <span className={styles['logo__text']}>TMV</span>
                    </a>

                    <nav
                        className={styles['nav-bar']}
                        ref={burgerMenu}
                    >
                        <a
                            className={styles['nav-bar__btn']}
                            href="#portfolio"
                            onClick={handleMenuClick}
                        >Portfolio</a>

                        <a
                            className={styles['nav-bar__btn']}
                            href="#about"
                            onClick={handleMenuClick}
                        >About</a>

                        <a
                            className={styles['nav-bar__btn']}
                            href="https://github.com/user530"
                            target='_blank'
                            rel="noreferrer"
                            onClick={handleMenuClick}
                        >GitHub</a>
                    </nav>

                    {
                        width < 768
                            ? <button
                                className={styles['burger-menu']}
                                onClick={handleMenuClick}
                            >
                                {
                                    menuOpen ?
                                        <MdOutlineClose />
                                        : <MdMenu />
                                }
                            </button>
                            : <a href='mailto:m.timarsuev@gmail.com' className={styles['contact-btn']}>
                                Contact
                            </a>
                    }

                </div>
            </div>
        </header>
    )
}