import axios from 'axios';
import { DevAPIServer, ProdAPIServer, ConstantNames } from '../constants/default-values';

const APIServer = process.env.NODE_ENV === 'PRODUCTION' ? ProdAPIServer : DevAPIServer;

const AuthAPI =  {
    signInWithEmailAndPassword: (email, password) => {
        const url = `${APIServer}/auth/login`;
        return axios.post(url, { email, password }).then(res => AuthAPI.updateAccessToken(res.accessToken), e => e);
    },
    verifyAccessToken: () => {
        if (!AuthAPI.getAccessToken()) {
            return;
        }
        const url = `${APIServer}/auth/profile`;
        return axios.get(url).then(user => ({ user }), e => e);
    },
    createUserWithEmailAndPassword: (email, password) => {
        const url = `${APIServer}/auth/register`;
        return axios.post(url, { email, password }).then(successResponse => successResponse, e => e);
    },
    signOut: () => {
        AuthAPI.removeAccessToken();
    },
    sendPasswordResetEmail: (email) => {

    },
    getDefaultRedirectPath: user => {
        if (!user) return '/';
        return `/${String(user.role).toLowerCase()}/dashboard`;
    },
    getAccessToken: () => {
        return localStorage.getItem(ConstantNames.AccessToken);
    },
    updateAccessToken: at => {
        localStorage.setItem(ConstantNames.AccessToken, at)
    },
    removeAccessToken: () => {
        localStorage.removeItem(ConstantNames.AccessToken);
    }
}

export default AuthAPI;
