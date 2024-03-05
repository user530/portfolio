import React from 'react';
import styles from './PortfolioAbout.module.scss';
import img1 from '../../assets/about-img1.png';
import img2 from '../../assets/about-img2.png';
import img3 from '../../assets/about-img3.png';
import photo from '../../assets/about-photo.png';

export interface IPortfolioAbout {
    heading: string;
    text: string;
    btnTxt: string;
    btnHref: string;
}

export const PortfolioAbout: React.FC<IPortfolioAbout> = ({ heading, text, btnTxt, btnHref }: IPortfolioAbout) => {
    return (
        <section id='about' className={styles['about']}>
            <div className={styles['container']}>
                <div className={styles['about-inner']}>
                    <div className={styles['about__left']}>
                        <h2 className={styles['h2']}>{heading}</h2>
                        <p>{text}</p>
                        <a className={
                            [styles['btn'],
                            styles['btn--special']].join(' ')
                        }
                            href={btnHref}
                        >{btnTxt}</a>
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
    )
}