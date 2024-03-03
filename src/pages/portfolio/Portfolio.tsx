import React from 'react';
import styles from './Portfolio.module.scss';
import img1 from '../../public/about-img1.png';
import img2 from '../../public/about-img2.png';
import img3 from '../../public/about-img3.png';
import photo from '../../public/about-photo.png';
import { FaWhatsapp, FaTelegram, FaLinkedin, FaPhoneAlt } from 'react-icons/fa';

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
                <section id='portfolio' className={styles['portfolio']}>
                    <div className={styles['container']}>
                        <div className={styles['cards-filter']}>
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
                                rel="noreferrer"
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
                                rel="noreferrer"
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
                                rel="noreferrer"
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
                                rel="noreferrer"
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

                        {/* <div className={styles['cards-pagination']}>
                            <button className={styles['btn']}>Load more</button>
                        </div> */}
                    </div>
                </section>

                <section id='about' className={styles['about']}>
                    <div className={styles['container']}>
                        <div className={styles['about-inner']}>
                            <div className={styles['about__left']}>
                                <h2 className={styles['h2']}>Help To Build Your Dream Project</h2>
                                <p>A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house.</p>
                                <a className={
                                    [styles['btn'],
                                    styles['btn--special']].join(' ')
                                }
                                    href='mailto:m.timarsuev@gmail.com'
                                >Contact now</a>
                            </div>
                            <div className={styles['about__right']}>
                                <img src={img1} alt="img-rect" className={styles['img-rect']} width={214} height={112} />
                                <img src={img2} alt="img-star" className={styles['img-star']} width={200} height={220} />
                                <img src={img3} alt="img-circle" className={styles['img-circle']} width={318} height={318} />
                                <div className={styles['img-photo']}>
                                    <img src={photo} alt="author" width={246} height={280} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main >

            <footer className={styles['footer']}>
                <div className={styles['container']}>
                    <div className={styles['footer__inner']}>
                        <div className={styles['social-block']}>
                            <a href="tel:+79271557757"><FaPhoneAlt /></a>
                            <a href="https://api.whatsapp.com/send?phone=79271557757"><FaWhatsapp /></a>
                            <a href="https://t.me/@tmv95"><FaTelegram /></a>
                            <a href="www.linkedin.com/in/magomed-timarsuev-7249581aa" target='_blank' rel='noreferrer'><FaLinkedin /></a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}