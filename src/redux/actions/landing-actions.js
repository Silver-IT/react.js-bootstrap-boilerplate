import {
    LANDING_FIRST_PAGE,
    LANDING_LAST_PAGE,
    LANDING_NEXT_PAGE,
    LANDING_PREV_PAGE,
    LANDING_SET_PAGES
} from './types';

export const goToNextPage = () => ({ type: LANDING_NEXT_PAGE });
export const goToPrevPage = () => ({ type: LANDING_PREV_PAGE });
export const goToFirstPage = () => ({ type: LANDING_FIRST_PAGE });
export const goToLastPage = () => ({ type: LANDING_LAST_PAGE });
export const setPages = (pagesCount, sectionsCount) => ({ type: LANDING_SET_PAGES, payload: { pagesCount, sectionsCount } });
