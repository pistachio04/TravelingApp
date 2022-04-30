const mainColors = {
  blue: '#5EDFFF',
  dark: '#031F2B',
  white: '#FFFFFF',
  grey1: '#D6D2D2',
  grey2: '#263238',
};

export const colors = {
  primary: mainColors.blue,
  secondary: mainColors.dark,
  white: mainColors.white,
  grey: mainColors.grey1,
  black: mainColors.grey2,
  text: {
    primary: mainColors.white,
    secondary: mainColors.grey1,
    tertiary: mainColors.grey2,
  },
  button: {
    primary: {
      background: mainColors.blue,
      text: mainColors.white,
    },
    secondary: {
      background: mainColors.dark,
      text: mainColors.blue,
    },
  },
  border: mainColors.blue,
};
