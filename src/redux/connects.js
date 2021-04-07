import { connect } from 'react-redux';

import { loginUser, logoutUser, verifyAccessToken } from './actions/auth-actions';
import { updateTheme } from './actions/ui-actions';
import { goToFirstPage, goToLastPage, goToNextPage, goToPrevPage, setPages } from './actions/landing-actions';

// AUTHENTICATION
const mapUserStateToProps = ({ authReducer }) => ({
    authenticated: !!authReducer.user,
    user: authReducer.user
});
const mapAuthDispatchToProps = { loginUserAction: loginUser, logoutUserAction: logoutUser };
export const connectAuth = connect( mapUserStateToProps, mapAuthDispatchToProps );

const mapAuthStateToProps = ({ authReducer }) => ({
    tokenVerified: !(authReducer.user === undefined),
    authenticated: !!authReducer.user,
    userRole: !authReducer.user ? null : authReducer.user.role });
const mapAuthCheckDispatchToProps = { verifyAccessTokenAction: verifyAccessToken };
export const connectAuthCheck = connect(mapAuthStateToProps, mapAuthCheckDispatchToProps);

// UI-THEME
const mapUIThemeStateToProps = ({ uiReducer }) => ({ theme: uiReducer.theme });
const mapUIThemeDispatchToProps = { updateTheme };
export const connectUITheme = connect( mapUIThemeStateToProps, mapUIThemeDispatchToProps );

// LANDING PAGE
const mapLandingStateToProps = ({ landingReducer }) => ({
    index: landingReducer.index,
    pagesCount: landingReducer.pagesCount,
    sectionsCount: landingReducer.sectionsCount
});
const mapLandingDispathToProps = { goToFirstPage, goToLastPage, goToPrevPage, goToNextPage };
export const connectLandingNavigation = connect( mapLandingStateToProps, mapLandingDispathToProps );
const mapLandingPageIndexToProps = ({ landingReducer }) => ({ index: landingReducer.index });
const mapLandingDispathPagesToProps = { setPages };
export const connectLandingPages = connect(mapLandingPageIndexToProps, mapLandingDispathPagesToProps);
