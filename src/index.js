import {
  themes, defaultTheme
} from './constants/default-values';

const previousUITheme = localStorage.getItem('ui-theme');
const currentUITheme = (previousUITheme && themes.includes(previousUITheme)) ? previousUITheme : defaultTheme;
localStorage.setItem('ui-theme', currentUITheme);

const render = () => {
  import(`./assets/scss/themes/${currentUITheme}.scss`).then(() => {
    require('./api/configuration');
    require('./AppRenderer');
  });
};

render();
