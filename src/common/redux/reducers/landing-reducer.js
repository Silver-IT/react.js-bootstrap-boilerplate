import {
    LANDING_PREV_PAGE,
    LANDING_NEXT_PAGE,
    LANDING_LAST_PAGE,
    LANDING_FIRST_PAGE,
    LANDING_SET_PAGES
} from '../actions/types';

const initialLandingState = {
    index: 0,
    pagesCount: 0,
    sectionsCount: 0
};

const landingReducer = (state = initialLandingState, action) => {
    switch (action.type) {
        case LANDING_PREV_PAGE:
            return { ...state, index: Math.max(state.index - 1, 0) };
        case LANDING_NEXT_PAGE:
            return { ...state, index: Math.min(state.index + 1, state.pagesCount - 1) };
        case LANDING_LAST_PAGE:
            return { ...state, index: state.pagesCount - 1 };
        case LANDING_FIRST_PAGE:
            return { ...state, index: 0 };
        case LANDING_SET_PAGES:
            return { ...state, pagesCount: action.payload.pagesCount, index: 0, sectionsCount: action.payload.sectionsCount }
        default:
            return state;
    }
  };

export default landingReducer;
