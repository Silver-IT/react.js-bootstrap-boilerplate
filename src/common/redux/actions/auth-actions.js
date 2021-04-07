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
} from './types';

export const loginUser = (loginUserDto, history) => ({
    type: LOGIN_USER,
    payload: { loginUserDto, history },
});
export const loginUserSuccess = () => ({
    type: LOGIN_USER_SUCCESS,
    payload: {},
});
export const loginUserError = (message) => ({
    type: LOGIN_USER_ERROR,
    payload: { message },
});

export const verifyAccessToken = (history, forceRedirect = true) => ({
    type: VERIFY_ACCESS_TOKEN,
    payload: { history, forceRedirect },
});
export const verifyAccessTokenSuccess = (user) => ({
    type: VERIFY_ACCESS_TOKEN_SUCCESS,
    payload: { user },
});
export const verifyAccessTokenError = (message) => ({
    type: VERIFY_ACCESS_TOKEN_ERROR,
    payload: { message },
});

export const forgotPassword = (forgotPasswordDto, history) => ({
    type: FORGOT_PASSWORD,
    payload: { forgotPasswordDto, history },
});
export const forgotPasswordSuccess = (email) => ({
    type: FORGOT_PASSWORD_SUCCESS,
    payload: { email },
});
export const forgotPasswordError = (message) => ({
    type: FORGOT_PASSWORD_ERROR,
    payload: { message },
});

export const resetPassword = ({ password, history }) => ({
    type: RESET_PASSWORD,
    payload: { resetPasswordDto: { password }, history },
});
export const resetPasswordSuccess = () => ({
    type: RESET_PASSWORD_SUCCESS,
    payload: {},
});
export const resetPasswordError = (message) => ({
    type: RESET_PASSWORD_ERROR,
    payload: { message },
});

export const registerUser = (registerUserDto, history) => ({
    type: REGISTER_USER,
    payload: { registerUserDto, history },
});
export const registerUserSuccess = () => ({
    type: REGISTER_USER_SUCCESS,
    payload: {},
});
export const registerUserError = (message) => ({
    type: REGISTER_USER_ERROR,
    payload: { message },
});

export const logoutUser = (history) => ({
    type: LOGOUT_USER,
    payload: { history },
});
