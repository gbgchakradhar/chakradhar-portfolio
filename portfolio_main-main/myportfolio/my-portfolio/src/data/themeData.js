/* eslint-disable */
import {
  greenThemeLight,
  greenThemeDark,
  bwThemeLight,
  bwThemeDark,
  blueThemeLight,
  blueThemeDark,
  redThemeLight,
  redThemeDark,
  orangeThemeLight,
  orangeThemeDark,
  purpleThemeLight,
  purpleThemeDark,
  pinkThemeLight,
  pinkThemeDark,
  yellowThemeLight,
  yellowThemeDark,
} from "../theme/theme";
function isDay() {
  const hours = new Date().getHours();
  return hours >= 6 && hours < 18;
}
export const themeData = {
  theme: isDay() ? purpleThemeLight : purpleThemeLight,
};

// Choose theme from above
