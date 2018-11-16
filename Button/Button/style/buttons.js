import {
  StyleSheet,
  PixelRatio,
} from 'react-native';

import { colors, border, fontSize, fontWeight, button } from './varibles';

const px = 1 / PixelRatio.get();

const defaultWrapper = {
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',

  paddingHorizontal: button.paddingHorizontalBase,
  paddingVertical: button.paddingVerticalBase,

  borderWidth: 1 * px,
  borderColor: border.color,
  borderRadius: border.radiusBase,

  backgroundColor: '#fff',
};

const defaultText = {
  fontSize: fontSize.base,
  fontWeight: fontWeight.bold,
  color: colors.grayDark,
};


const primaryWrapper = {
  ...defaultWrapper,
  borderColor: colors.brandPrimary,
  backgroundColor: colors.brandPrimary,
};

const primaryText = {
  ...defaultText,
  color: colors.grayBase,
};


const dangerWrapper = {
  ...defaultWrapper,
  borderColor: colors.brandDanger,
  backgroundColor: colors.brandDanger,
};

const dangerText = {
  ...defaultText,
  color: colors.whiteBase,
};


const warningWrapper = {
  ...defaultWrapper,
  borderColor: colors.brandWarning,
  backgroundColor: colors.brandWarning,
};

const warningText = {
  ...defaultText,
  color: colors.whiteBase,
};


const successWrapper = {
  ...defaultWrapper,
  borderColor: colors.brandSuccess,
  backgroundColor: colors.brandSuccess,
};

const successText = {
  ...defaultText,
  color: colors.whiteBase,
};


const infoWrapper = {
  ...defaultWrapper,
  borderColor: colors.brandInfo,
  backgroundColor: colors.brandInfo,
};

const infoText = {
  ...defaultText,
  color: colors.whiteBase,
};

const disabledWrapper = {
  ...defaultWrapper,
  borderColor: colors.grayLightest,
  backgroundColor: colors.grayLightest,
};

const disabledText = {
  ...defaultText,
  color: colors.grayLight,
};

const textWrapper = {
  ...defaultWrapper,
  borderWidth: 0,
  backgroundColor: 'transparent'
}

const textText = {
  ...defaultText,
}

const styleRound = {
  borderRadius: 1000,
  overflow: 'hidden',
}

const buttons = StyleSheet.create({
  defaultWrapper,
  defaultText,

  primaryWrapper,
  primaryText,

  dangerWrapper,
  dangerText,

  successWrapper,
  successText,

  warningWrapper,
  warningText,

  infoWrapper,
  infoText,

  disabledWrapper,
  disabledText,

  textWrapper,
  textText,

  styleRound,
});

export default buttons;