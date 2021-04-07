import { UI_THEME_CHANGE } from '../actions/types';

const initialUIState = {
    theme: null,
};

const uiReducer = (state = initialUIState, action) => {
    switch (action.type) {
        case UI_THEME_CHANGE:
            return { theme: action.payload.theme };
        default:
            return state;
    }
  };

export default uiReducer;
