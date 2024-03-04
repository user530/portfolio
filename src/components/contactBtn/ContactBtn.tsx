import React from 'react';
import styles from './ContactBtn.module.scss';

interface IContactBtn {
    text: string;
    href: string;
}

export const ContactBtn: React.FC<IContactBtn> = ({ text, href }: IContactBtn) => {
    return (
        <a className={styles['contact-btn']}
            href={href}
        >
            {text}
        </a>
    )
}
