import {
    LOGIN_USER,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_ERROR,
    VERIFY_ACCESS_TOKEN,
    VERIFY_ACCESS_TOKEN_SUCCESS,
    VERIFY_ACCESS_TOKEN_ERROR,
    LOGOUT_USER,
    REGISTER_USER,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_ERROR,
    FORGOT_PASSWORD,
    FORGOT_PASSWORD_SUCCESS,
    FORGOT_PASSWORD_ERROR,
    RESET_PASSWORD,
    RESET_PASSWORD_SUCCESS,
    RESET_PASSWORD_ERROR,
} from '../actions/types';

const INIT_STATE = {
    user: undefined,
    forgotPasswordEmail: '',
    loading: false,
    error: '',
};

const authReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case LOGIN_USER:
            return { ...state, user: null, loading: true, error: '' };
        case LOGIN_USER_SUCCESS:
            return { ...state, loading: false, user: null, error: '' };
        case LOGIN_USER_ERROR:
            return { ...state, loading: false, user: null, error: action.payload.message };
        case VERIFY_ACCESS_TOKEN:
            return { ...state, loading: true, error: '' };
        case VERIFY_ACCESS_TOKEN_SUCCESS:
            return { ...state, loading: false, user: action.payload.user, error: '' };
        case VERIFY_ACCESS_TOKEN_ERROR:
            return { ...state, loading: false, user: null, error: action.payload.message };
        case FORGOT_PASSWORD:
            return { ...state, loading: true, error: '' };
        case FORGOT_PASSWORD_SUCCESS:
            return { ...state, loading: false, forgotPasswordEmail: action.payload.email, error: '' };
        case FORGOT_PASSWORD_ERROR:
            return { ...state, loading: false, forgotPasswordEmail: '', error: action.payload.message };
        case RESET_PASSWORD:
            return { ...state, loading: true, error: '' };
        case RESET_PASSWORD_SUCCESS:
            return { ...state, loading: false, error: '' };
        case RESET_PASSWORD_ERROR:
            return { ...state, loading: false, error: action.payload.message };
        case REGISTER_USER:
            return { ...state, loading: true, error: '' };
        case REGISTER_USER_SUCCESS:
            return { ...state, loading: false, error: '' };
        case REGISTER_USER_ERROR:
            return { ...state, loading: false, error: action.payload.message };
        case LOGOUT_USER:
            return { ...state, user: null, error: '' };
        default:
            return { ...state };
    }
};

export default authReducer;
