import React from 'react';
import styles from './PortfolioCards.module.scss';
import { usePortfolioCards, ProjectData } from './usePortfolioCards';

export interface IPortfolioCards {
    projectsData: ProjectData[],
    pageCount: number,
}

export const PortfolioCards: React.FC<IPortfolioCards> = ({ projectsData, pageCount }: IPortfolioCards) => {
    const {
        itemCount,
        tags,
        filter,
        filteredProjects,
        filterClickHandler,
        loadBtnClickHandler,
    } = usePortfolioCards(pageCount, projectsData);

    return (
        <section id='portfolio' className={styles['portfolio']}>
            <div className={styles['container']}>
                <div className={styles['cards-filter']}>
                    {
                        Object
                            .entries(tags)
                            .map(
                                ([tagLabel, tagNumber]) => (
                                    <PortfolioFilterBtn
                                        key={tagLabel + tagNumber}
                                        tagLabel={tagLabel}
                                        tagNumber={tagNumber}
                                        isActive={tagLabel === filter}
                                        clickHandler={() => filterClickHandler(tagLabel)}
                                    />
                                )
                            )
                    }
                </div>

                <div className={styles['cards-grid']}>
                    {
                        filteredProjects
                            .map(
                                (projectData, ind) => (
                                    <PortfolioCard key={projectData.name + ind} {...projectData} />
                                )
                            )
                    }
                </div>

                {
                    projectsData.length > itemCount
                        ? (
                            <div className={styles['cards-pagination']}>
                                <button
                                    className={styles['btn']}
                                    onClick={loadBtnClickHandler}
                                >Load more</button>
                            </div>
                        )
                        : null
                }
            </div>
        </section>
    )
}

interface IPortfolioFilterBtn {
    tagLabel: string;
    tagNumber: number;
    isActive: boolean;
    clickHandler: (...args: any[]) => void;
}

const PortfolioFilterBtn: React.FC<IPortfolioFilterBtn> =
    ({ tagLabel, tagNumber, isActive, clickHandler }: IPortfolioFilterBtn) => {
        return (
            <button
                onClick={clickHandler}
                className={
                    [
                        styles['filter__btn'],
                        isActive ? styles['filter__btn--active'] : ''
                    ].join(' ')
                }>
                {tagLabel}<span className={styles['item-counter']}>{tagNumber}</span>
            </button>
        )
    }

interface IPortfolioCard {
    name: string;
    href: string;
    tags: string[];
    shortDescription: string;
    imgName: string;
}

const PortfolioCard: React.FC<IPortfolioCard> =
    ({ name, href, tags, shortDescription, imgName }: IPortfolioCard) => {
        return (
            <a
                href={href}
                target='_blank'
                rel="noreferrer"
                className={styles['card']}
                style={{ backgroundImage: `url(/${imgName})` }}
            >

                <div className={styles['card__info']}>
                    <ul className={styles['info__tags']}>
                        {
                            tags.map((tag, ind) => <li key={tag + ind}>{tag}</li>)
                        }
                    </ul>

                    <h3 className={styles['info__title']}>{name}</h3>
                </div>
                <div className={styles['card__details']}>
                    <p>{shortDescription}</p>
                </div>
            </a>
        )
    }