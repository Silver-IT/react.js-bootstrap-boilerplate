import { ConstantNames } from '../constants/default-values';
import { UITheme } from '../enums/theme';

export const toggleDarkTheme = (isDarkTheme = false, forceRedirect = true) => {
    if (isDarkTheme) {
        localStorage.setItem(ConstantNames.UITheme, UITheme.Dark);
    } else if (!isDarkTheme) {
        localStorage.setItem(ConstantNames.UITheme, UITheme.Light);
    }
    if (forceRedirect) {
        window.location.reload();
    }
};

export const isDarkTheme = () => {
    return localStorage.getItem(ConstantNames.UITheme) === UITheme.Dark;
};
