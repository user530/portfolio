import React from 'react';
import styles from './Portfolio.module.scss';

export const PortfolioPage: React.FC = () => {
    return (
        <>
            <header className={styles['title']}>
                <div className={styles['container']}>
                    <div className={styles['title__inner']}>
                        <h1 className={
                            [styles['h1'], styles['main-title']].join(' ')
                        }>Portfolio</h1>
                        <h3 className={
                            [styles['text'], styles['sub-title']].join(' ')
                        }>Full stack web developer,<br />keeping up the grind, one step at a time</h3>
                    </div>
                </div>
            </header>

            <main className={styles['content']}>
                <div className={styles['container']}>
                    <div className={styles['content-inner']}>
                        <div className={styles['filter']}>
                            <button className={
                                [styles['filter__btn'], styles['filter__btn--active']].join(' ')
                            }>
                                React<span className={styles['item-counter']}>2</span>
                            </button>
                            <button className={styles['filter__btn']}>
                                Vue<span className={styles['item-counter']}>1</span></button>
                            <button className={styles['filter__btn']}>
                                Express<span className={styles['item-counter']}>0</span></button>
                            <button className={styles['filter__btn']}>
                                NestJs<span className={styles['item-counter']}>3</span></button>
                        </div>

                        <div className={styles['cards']}>
                            <div className={styles['card']}>CARD</div>
                            <div className={styles['card']}>CARD</div>
                            <div className={styles['card']}>CARD</div>
                            <div className={styles['card']}>CARD</div>
                            <div className={styles['card']}>CARD</div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}