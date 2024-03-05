import React from 'react';
import styles from './Portfolio.module.scss';
import { PortfolioCards, IPortfolioCards } from '../../components/portfolioCards/PortfolioCards';
import { PortfolioAbout, IPortfolioAbout } from '../../components/portfolioAbout/PortfolioAbout';

export interface IPortfolioPage {
    title: string;
    subtitle: string;
    cardsSectionProps: IPortfolioCards;
    aboutSectionProps: IPortfolioAbout;
}

export const PortfolioPage: React.FC<IPortfolioPage> = (
    { title, subtitle, cardsSectionProps, aboutSectionProps }: IPortfolioPage) => {
    return (
        <>
            <header className={styles['title']}>
                <div className={styles['container']}>
                    <div className={styles['title__inner']}>
                        <h1 className={
                            [styles['h1'], styles['main-title']].join(' ')
                        }>{title}</h1>

                        <h3 className={
                            [styles['text'], styles['sub-title']].join(' ')
                        }>{subtitle}</h3>
                    </div>
                </div>
            </header>

            <main className={styles['content']}>
                <PortfolioCards {...cardsSectionProps} />
                <PortfolioAbout {...aboutSectionProps} />
            </main >
        </>
    )
}