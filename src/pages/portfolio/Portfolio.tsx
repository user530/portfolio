import React from 'react';
import styles from './Portfolio.module.scss';

export const PortfolioPage: React.FC = () => {
    return (
        <>
            <div className={styles['title']}>
                <div className={styles['container']}>
                    <div className={styles['title__inner']}>
                        <h1 className={
                            [styles['h1'], styles['main-title']].join(' ')
                        }>Portfolio</h1>
                        <h3 className={
                            [styles['h3'], styles['sub-title']].join(' ')
                        }>Full stack web developer,<br />keeping up the grind, one step at a time</h3>
                    </div>
                </div>
            </div>

        </>
    )
}