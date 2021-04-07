import { combineReducers } from 'redux';

import authReducer from './auth-reducer';
import uiReducer from './ui-reducer';
import landingReducer from './landing-reducer';

const rootReducer = combineReducers({
    authReducer,
    uiReducer,
    landingReducer
});

export default rootReducer;
