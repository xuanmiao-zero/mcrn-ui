import {
  StyleSheet,
  PixelRatio,
} from 'react-native';

const px = 1 / PixelRatio.get();


export let colors = {
  /**
   * 灰度
   */
  grayBase: '#000',
  grayDarker: '#222',
  grayDark: '#333',
  gray: '#666',
  grayLight: '#999',
  grayLighter: '#ccc',
  grayLightest: '#E5E5E5',
  whiteBase: '#FFF',


  /**
   * 主题色
   */
  brandPrimary: '#FFB000',

  brandSuccess: '#60C034',
  brandInfo: '#5bc0de',
  brandDanger: '#FF4646',
  brandWarning: '#FF8C28',

  /**
   * 背景色
   */
  bgBase: '#fff',
  bgGray: '#f4f4f4',
};


export let fontSize = {
  base: 16,
  small: 12,
  tiny: 10,

  h0: 64,
  h0_1: 56,
  h0_2: 48,
  h0_3: 44,

  h1: 36,

  h2: 32,
  h2_1: 28,

  h3: 24,
  h3_1: 22,

  h4: 18,
  lg: 20,
};

export let fontWeight = {
  light: '200',
  normal: 'normal',
  bold: 'bold',
};


export let padding = {
  horizontal: 24,
  vertical: 12,

  iconHorizontalLarge: 20,
  iconHorizontalBase: 15,
  iconHorizontalSmall: 10,

  iconVerticalLarge: 20,
  iconVerticalBase: 15,
  iconVerticalSmall: 10,
};

export let margin = {};

export let border = {
  width: 1 * px,
  color: colors.grayLightest,
  radiusBase: 4,
  radiusLarge: 6,
  radiusSmall: 2,
};

export let formControl = {
  labelHeight: 30,
  labelWidth: 90,
  labelMarginRight: 40,
};

export let button = {
  paddingHorizontalLarge: 30,
  paddingVerticalLarge: 15,

  paddingHorizontalBase: padding.horizontal,
  paddingVerticalBase: padding.vertical,

  paddingHorizontalSmall: 18,
  paddingVerticalSmall: 8,

};


export function setVaribles(args) {
  colors = {
    ...colors,
    ...(args && args.colors),
  };

  fontSize = {
    ...fontSize,
    ...(args && args.fontSize),
  };

  fontWeight = {
    ...fontWeight,
    ...(args && args.fontWeight),
  };

  padding = {
    ...padding,
    ...(args && args.padding),
  };

  margin = {
    ...margin,
    ...(args && args.margin),
  };

  border = {
    ...border,
    ...(args && args.border),
  };

  formControl = {
    ...formControl,
    ...(args && args.formControl),
  };

  button = {
    ...button,
    ...(args && args.button),
  };
}