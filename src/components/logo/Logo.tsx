import React from 'react';
import styles from './Logo.module.scss';
import { IconType } from 'react-icons';

interface ILogoComponent {
    title: string;
    icon: IconType;
    link: string;
}

export const Logo: React.FC<ILogoComponent> = ({ title, icon, link }: ILogoComponent) => {
    return (
        <a href={link} className={styles['logo']}>
            {
                icon({ className: styles['logo__icon'] })
            }

            <span className={styles['logo__text']}>{title}</span>
        </a>
    )
}