import { defaultTheme, ConstantNames } from './common/constants/default-values';
import { UITheme } from './common/enums/theme';

const themes = Object.values(UITheme);

const previousUITheme = localStorage.getItem(ConstantNames.UITheme);
const currentUITheme = (previousUITheme && themes.includes(previousUITheme)) ? previousUITheme : defaultTheme;
localStorage.setItem(ConstantNames.UITheme, currentUITheme);

const render = () => {
  import(`./assets/scss/themes/${String(currentUITheme).toLocaleLowerCase()}.scss`).then(() => {
    require('./common/api/configuration');
    require('./AppRenderer');
  });
};

render();
