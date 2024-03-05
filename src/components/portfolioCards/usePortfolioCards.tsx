import React from 'react';

export interface ProjectData {
    name: string;
    imgName: string;
    href: string;
    tags: string[];
    shortDescription: string;
}

export const usePortfolioCards = (cardsPerLoad: number, projectsData: ProjectData[]) => {
    const [itemCount, setItemCount] = React.useState<number>(cardsPerLoad > 0 ? cardsPerLoad : 0);

    const loadedProjects = React.useMemo(
        () => projectsData.length > itemCount
            ? projectsData.slice(0, itemCount) :
            projectsData,
        [projectsData, itemCount]
    );

    const tags: Record<string, number> = React.useMemo(
        () => (loadedProjects
            .reduce<Record<string, number>>(
                (obj, proj) => {
                    proj.tags.forEach(tagLabel => tagLabel in obj ? obj[tagLabel]++ : obj[tagLabel] = 1)
                    return obj;
                }, { 'All': loadedProjects.length })),
        [loadedProjects]
    );

    const [filter, setFilter] = React.useState<string>('All');

    const filteredProjects = React.useMemo(
        () => (filter === 'All'
            ? loadedProjects
            : loadedProjects.filter(project => project.tags.includes(filter))
        ),
        [loadedProjects, filter]
    );

    const filterClickHandler = (newValue: string) => { setFilter(newValue) };
    const loadBtnClickHandler = () => setItemCount(prev => Math.min(prev * 2, projectsData.length));

    return {
        itemCount,
        tags,
        filter,
        filteredProjects,
        filterClickHandler,
        loadBtnClickHandler,
    }
}