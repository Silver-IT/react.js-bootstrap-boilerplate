import { combineReducers } from 'redux';

import authReducer from './auth-reducer';
import landingReducer from './landing-reducer';

const rootReducer = combineReducers({
    authReducer,
    landingReducer
});

export default rootReducer;
