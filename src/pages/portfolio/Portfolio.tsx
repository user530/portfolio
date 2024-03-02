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

                        <div className={styles['cards-grid']}>
                            <a
                                href='#!'
                                target='_blank'
                                className={styles['card']}>

                                <div className={styles['card__info']}>
                                    <ul className={styles['info__tags']}>
                                        <li>React</li>
                                        <li>NestJS</li>
                                    </ul>
                                    <h3 className={styles['info__title']}>Project Name</h3>
                                </div>
                                <div className={styles['card__details']}>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem repellat quia numquam voluptas doloremque fugiat ullam perferendis quisquam ipsum accusantium reprehenderit pariatur, sed voluptatibus! Praesentium minus ab beatae provident nesciunt.</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem repellat quia numquam voluptas doloremque fugiat ullam perferendis quisquam ipsum accusantium reprehenderit pariatur, sed voluptatibus! Praesentium minus ab beatae provident nesciunt.</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem repellat quia numquam voluptas doloremque fugiat ullam perferendis quisquam ipsum accusantium reprehenderit pariatur, sed voluptatibus! Praesentium minus ab beatae provident nesciunt.</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem repellat quia numquam voluptas doloremque fugiat ullam perferendis quisquam ipsum accusantium reprehenderit pariatur, sed voluptatibus! Praesentium minus ab beatae provident nesciunt.</p>
                                </div>
                            </a>

                            <a
                                href='#!'
                                target='_blank'
                                className={styles['card']}>

                                <div className={styles['card__info']}>
                                    <ul className={styles['info__tags']}>
                                        <li>React</li>
                                        <li>NestJS</li>
                                    </ul>
                                    <h3 className={styles['info__title']}>Project Name</h3>
                                </div>
                                <div className={styles['card__details']}>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem repellat quia numquam voluptas doloremque fugiat ullam perferendis quisquam ipsum accusantium reprehenderit pariatur, sed voluptatibus! Praesentium minus ab beatae provident nesciunt.</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem repellat quia numquam voluptas doloremque fugiat ullam perferendis quisquam ipsum accusantium reprehenderit pariatur, sed voluptatibus! Praesentium minus ab beatae provident nesciunt.</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem repellat quia numquam voluptas doloremque fugiat ullam perferendis quisquam ipsum accusantium reprehenderit pariatur, sed voluptatibus! Praesentium minus ab beatae provident nesciunt.</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem repellat quia numquam voluptas doloremque fugiat ullam perferendis quisquam ipsum accusantium reprehenderit pariatur, sed voluptatibus! Praesentium minus ab beatae provident nesciunt.</p>
                                </div>
                            </a>

                            <a
                                href='#!'
                                target='_blank'
                                className={styles['card']}>

                                <div className={styles['card__info']}>
                                    <ul className={styles['info__tags']}>
                                        <li>React</li>
                                        <li>NestJS</li>
                                    </ul>
                                    <h3 className={styles['info__title']}>Project Name</h3>
                                </div>
                                <div className={styles['card__details']}>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem repellat quia numquam voluptas doloremque fugiat ullam perferendis quisquam ipsum accusantium reprehenderit pariatur, sed voluptatibus! Praesentium minus ab beatae provident nesciunt.</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem repellat quia numquam voluptas doloremque fugiat ullam perferendis quisquam ipsum accusantium reprehenderit pariatur, sed voluptatibus! Praesentium minus ab beatae provident nesciunt.</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem repellat quia numquam voluptas doloremque fugiat ullam perferendis quisquam ipsum accusantium reprehenderit pariatur, sed voluptatibus! Praesentium minus ab beatae provident nesciunt.</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem repellat quia numquam voluptas doloremque fugiat ullam perferendis quisquam ipsum accusantium reprehenderit pariatur, sed voluptatibus! Praesentium minus ab beatae provident nesciunt.</p>
                                </div>
                            </a>

                            <a
                                href='#!'
                                target='_blank'
                                className={styles['card']}>

                                <div className={styles['card__info']}>
                                    <ul className={styles['info__tags']}>
                                        <li>React</li>
                                        <li>NestJS</li>
                                    </ul>
                                    <h3 className={styles['info__title']}>Project Name</h3>
                                </div>
                                <div className={styles['card__details']}>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem repellat quia numquam voluptas doloremque fugiat ullam perferendis quisquam ipsum accusantium reprehenderit pariatur, sed voluptatibus! Praesentium minus ab beatae provident nesciunt.</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem repellat quia numquam voluptas doloremque fugiat ullam perferendis quisquam ipsum accusantium reprehenderit pariatur, sed voluptatibus! Praesentium minus ab beatae provident nesciunt.</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem repellat quia numquam voluptas doloremque fugiat ullam perferendis quisquam ipsum accusantium reprehenderit pariatur, sed voluptatibus! Praesentium minus ab beatae provident nesciunt.</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem repellat quia numquam voluptas doloremque fugiat ullam perferendis quisquam ipsum accusantium reprehenderit pariatur, sed voluptatibus! Praesentium minus ab beatae provident nesciunt.</p>
                                </div>
                            </a>

                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}