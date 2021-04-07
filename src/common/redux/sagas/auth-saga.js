import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import AuthAPI from '../../api/auth';
import {
    LOGIN_USER,
    VERIFY_ACCESS_TOKEN,
    REGISTER_USER,
    LOGOUT_USER,
    FORGOT_PASSWORD,
    RESET_PASSWORD,
} from '../actions/types';

import {
    loginUserSuccess,
    loginUserError,
    verifyAccessToken,
    verifyAccessTokenSuccess,
    verifyAccessTokenError,
    registerUserSuccess,
    registerUserError,
    forgotPasswordSuccess,
    forgotPasswordError,
    resetPasswordSuccess,
    resetPasswordError,
} from '../actions/auth-actions';

export function* watchLoginUser() {
    yield takeEvery(LOGIN_USER, loginWithEmailPassword);
}

const loginWithEmailPasswordAsync = async (email, password) =>
    await AuthAPI.signInWithEmailAndPassword(email, password);

function* loginWithEmailPassword({ payload }) {
    const { email, password } = payload.loginUserDto;
    const { history } = payload;
    AuthAPI.removeAccessToken();
    try {
        yield call(loginWithEmailPasswordAsync, email, password);
        yield put(loginUserSuccess());
        yield put(verifyAccessToken(history));
    } catch (error) {
        yield put(loginUserError(error));
    }
}

export function* watchVerifyAccessToken() {
    yield takeEvery(VERIFY_ACCESS_TOKEN, verifyAccessTokenNow);
}

const verifyAccessTokenAsync = async () =>
    await AuthAPI.verifyAccessToken();

function* verifyAccessTokenNow({ payload }) {
    const { history, forceRedirect } = payload;
    try {
        const { user, message } = yield call(verifyAccessTokenAsync);
        if (user) {
            yield put(verifyAccessTokenSuccess(user));
            if (forceRedirect) {
                history.replace(AuthAPI.getDefaultRedirectPath());
            }
        } else {
            yield put(verifyAccessTokenError(message));
        }
    } catch (error) {
        yield put(verifyAccessTokenError(error));
    }
}

export function* watchRegisterUser() {
    yield takeEvery(REGISTER_USER, registerWithEmailPassword);
}

const registerWithEmailPasswordAsync = async (email, password) =>
    await AuthAPI
        .createUserWithEmailAndPassword(email, password)
        .then(successResponse => successResponse)
        .catch(error => error);

function* registerWithEmailPassword({ payload }) {
    const { email, password } = payload.registerUserDto;
    const { history } = payload;
    try {
        const registerUser = yield call(
            registerWithEmailPasswordAsync,
            email,
            password
        );
        if (!registerUser.success) {
            yield put(registerUserSuccess());
            history.push('/auth/login');
        } else {
            yield put(registerUserError(registerUser.message));
        }
    } catch (error) {
        yield put(registerUserError(error));
    }
}

export function* watchLogoutUser() {
    yield takeEvery(LOGOUT_USER, logout);
}

const logoutAsync = async (history) => {
    // await AuthAPI
    //     .signOut()
    //     .then(succeessResponse => succeessResponse)
    //     .catch(error => error);
    AuthAPI.removeAccessToken();
    history.replace('/');
};

function* logout({ payload }) {
    const { history } = payload;
    try {
        yield call(logoutAsync, history);
    } catch (error) { }
}

export function* watchForgotPassword() {
    yield takeEvery(FORGOT_PASSWORD, forgotPassword);
}

const forgotPasswordAsync = async (email) => {
    return await AuthAPI
        .sendPasswordResetEmail(email)
        .then(successResponse => successResponse)
        .catch(error => error);
};

function* forgotPassword({ payload }) {
    const { email } = payload.forgotPasswordDto;
    try {
        const forgotPasswordStatus = yield call(forgotPasswordAsync, email);
        if (!forgotPasswordStatus.success) {
            yield put(forgotPasswordSuccess(email));
        } else {
            yield put(forgotPasswordError(forgotPasswordStatus.message));
        }
    } catch (error) {
        yield put(forgotPasswordError(error));
    }
}

export function* watchResetPassword() {
    yield takeEvery(RESET_PASSWORD, resetPassword);
}

const resetPasswordAsync = async (resetPasswordCode, newPassword) => {
    return await AuthAPI
        .confirmPasswordReset(resetPasswordCode, newPassword)
        .then(successResponse => successResponse)
        .catch((error) => error);
};

function* resetPassword({ payload }) {
    const { password } = payload.resetPasswordDto;
    const { history } = payload;
    try {
        const resetPasswordStatus = yield call(resetPasswordAsync, password);
        if (!resetPasswordStatus.success) {
            yield put(resetPasswordSuccess());
            history.push('/auth/login');
        } else {
            yield put(resetPasswordError(resetPasswordStatus.message));
        }
    } catch (error) {
        yield put(resetPasswordError(error));
    }
}

export default function* rootSaga() {
    yield all([
        fork(watchLoginUser),
        fork(watchVerifyAccessToken),
        fork(watchLogoutUser),
        fork(watchRegisterUser),
        fork(watchForgotPassword),
        fork(watchResetPassword),
    ]);
}
