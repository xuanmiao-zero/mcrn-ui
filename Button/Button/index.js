import React from 'react';
import {
  Text,
  TouchableOpacity,
  View, Image,
} from 'react-native';

import buttonsStyle from './style/buttons';
import { fontSize, button } from './style/varibles';

const loadingImg = require('./loading.gif');

const fontSizeMap = {
  lg: fontSize.lg,
  md: fontSize.base,
  sm: fontSize.small,
};

const paddingMap = {
  lg: {
    paddingHorizontal: button.paddingHorizontalLarge,
    paddingVertical: button.paddingVerticalLarge,
  },
  md: {
    paddingHorizontal: button.paddingHorizontalBase,
    paddingVertical: button.paddingVerticalBase,
  },
  sm: {
    paddingHorizontal: button.paddingHorizontalSmall,
    paddingVertical: button.paddingVerticalSmall,
  },
};

export default class Button extends React.Component {
  static propTypes = {};
  static defaultProps = {
    type: 'default', // default primary success info warning danger disabled
    size: 'md', // sm md lg
    style: {},
    textColorReverse: false,
    responsive: false,
    round: false,
    disabled: false,
    iconPosition: 'left', // left right
    onPress: () => {
    },
  };

  render() {
    const styleWrapper = buttonsStyle[`${this.props.type}Wrapper`] || buttonsStyle.defaultWrapper;
    const styleText = buttonsStyle[`${this.props.type}Text`] || buttonsStyle.defaultText;
    const {
      responsive, textColorReverse, size, round,
      children, disabled, icon, iconPosition, loading,
      textStyle, btnStyle,
    } = this.props;
    const styleRound = round ? buttonsStyle.styleRound : undefined;

    const img = loading ? loadingImg : icon;
    const currentFontSize = fontSizeMap[size];
    return (
      <TouchableOpacity
        style={{ ...(typeof this.props.style === 'object' ? this.props.style : {}), flexDirection: 'row' }}
        onPress={disabled ? () => {
        } : this.props.onPress}
        activeOpacity={disabled ? 1 : 0.3}
      >

        <View
          style={[
            styleWrapper,
            { flex: responsive ? 1 : null },
            { ...(paddingMap[size] || paddingMap.md) },
            styleRound,
            { opacity: disabled ? 0.5 : 1 },
            btnStyle,
          ]}
        >

          {/* 左侧图标*/}
          {iconPosition === 'left' && img && <Image
            style={{ width: currentFontSize * 0.8, height: currentFontSize * 0.8, marginRight: 10 }}
            source={img}
          />}

          {
            React.isValidElement(children) ?
              children :
              children !== undefined &&
              <Text
                style={[
                  styleText,
                  { fontSize: currentFontSize || fontSizeMap.md },
                  textColorReverse ? { color: '#fff' } : undefined,
                  textStyle,
                ]}
              >
                {children}
              </Text>
          }

          {/* 右侧图标*/}
          {iconPosition === 'right' && img && <Image
            style={{ width: currentFontSize * 0.7, height: currentFontSize * 0.7, marginLeft: 10 }}
            source={icon}
          />}
        </View>
      </TouchableOpacity>
    );
  }
}
