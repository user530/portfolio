import React from 'react';
import styles from './SocialIcons.module.scss';
import { IconType } from 'react-icons';

export interface SocialIcon {
    icon: IconType;
    href: string;
    newTab?: boolean;
}

export interface ISocialIcons {
    icons: SocialIcon[];
}

export const SocialIcons: React.FC<ISocialIcons> = ({ icons }: ISocialIcons) => {
    return (
        <div className={styles['social-block']}>
            {
                icons.map(
                    ({ icon, href, newTab }, ind) => (
                        <a
                            key={'social-' + ind}
                            href={href}
                            target={newTab ? '_blank' : '_self'}
                            rel={newTab ? 'noreferrer' : 'bookmark'}
                        >{
                                icon({})
                            }</a>
                    )
                )
            }
        </div>
    )
}