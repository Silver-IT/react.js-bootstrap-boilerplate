import { UI_THEME_CHANGE } from './types';

export const updateTheme = (theme) => ({ type: UI_THEME_CHANGE, payload: { theme } });
