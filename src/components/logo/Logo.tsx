import React from 'react';
import styles from './Logo.module.scss';
import { IconType } from 'react-icons';

export interface ILogo {
    title: string;
    icon: IconType;
    link: string;
}

export const Logo: React.FC<ILogo> = ({ title, icon, link }: ILogo) => {
    return (
        <a href={link} className={styles['logo']}>
            {
                icon({ className: styles['logo__icon'] })
            }

            <span className={styles['logo__text']}>{title}</span>
        </a>
    )
}