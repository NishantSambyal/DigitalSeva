export const baseColors = {
  default: '#172b4d',
  blue: '#079EBF',
  lightblue: '#E6F5F9',
  colorPrimaryDark: '#007d96',
  white: '#FFFFFF',
  textColor: '#333333',
  red: '#D43653',
  bubbleBackground: '#F2F2F2',
  buttonGrey: '#BDBDBD',
  textGray: '#828282',
  gray5: '#E0E0E0',
  blackTransparent: '#00000080',
  yellow: '#EAAF56',
  pink: '#F08080',
  brown: '#883955',
  purple: '#7B61FF',
  sky: '#42CAFD',
  green: '#60D08D',
  ratingGreen: '#4EAF80',
  darkGreen: '#2D848A',
  gray66: '#666666',
  gray4: '#4F4F4F',
  lightred: '#FAE7EA',
  black: '#000',
  gray6: 'rgba(242, 242, 242, 1)',
  gray: 'rgba(200, 200, 200, 1)',
  gray8: '#888',
  gray2: 'rgba(79, 79, 79, 1)',
  gray3: 'rgba(130, 130, 130, 1)',
  gray1: 'rgba(51, 51, 51, 1)',
};

export const baseColorsConsumer = {
  default: '#172b4d',
  blue: '#D43653',
  lightblue: '#FAE7EA',
  colorPrimaryDark: '#D43653',
  white: '#FFFFFF',
  textColor: '#333333',
  red: '#D43653',
  bubbleBackground: '#F2F2F2',
  buttonGrey: '#BDBDBD',
  textGray: '#828282',
  gray5: '#E0E0E0',
  blackTransparent: '#00000080',
  yellow: '#EAAF56',
  pink: '#F08080',
  brown: '#883955',
  purple: '#7B61FF',
  sky: '#42CAFD',
  green: '#60D08D',
  ratingGreen: '#4EAF80',
  darkGreen: '#2D848A',
  gray66: '#666666',
  gray4: '#4F4F4F',
  lightred: '#FAE7EA',
  black: '#000',
  gray6: 'rgba(242, 242, 242, 1)',
  gray8: '#888',
  gray: 'rgba(200, 200, 200, 1)',
  gray3: 'rgba(130, 130, 130, 1)',
  gray1: 'rgba(51, 51, 51, 1)',
};

const colors = (isDarkMode = false) => {
  const finalColors = isDarkMode ? baseColors : baseColorsConsumer;
  return {
    ...finalColors,
    //  add custom colors here with different name
    success: finalColors.blue,
  };
};

const theme = {
  colors: colors(),
};

const defaultTheme = (isDarkMode = false) => {
  return {
    colors: colors(isDarkMode),
  };
};

export type Theme = ReturnType<typeof defaultTheme>;

export { theme, defaultTheme };
