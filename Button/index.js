import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  Image,
  Animated,
  Easing,
} from 'react-native';

import buttonsStyle from './style/buttons';
import { fontSize, button } from './style/varibles';

const loadingImg = require('./loading1.png');

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
    loadingColor: '#fff',
    onPress: () => {
    },
  };

  constructor(props) {
    super(props);
    String.prototype.colorRgb = function () {
      var sColor = this.toLowerCase();
      //十六进制颜色值的正则表达式
      var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
      // 如果是16进制颜色
      if (sColor && reg.test(sColor)) {
        if (sColor.length === 4) {
          var sColorNew = "#";
          for (var i = 1; i < 4; i += 1) {
            sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
          }
          sColor = sColorNew;
        }
        //处理六位的颜色值
        var sColorChange = [];
        for (var i = 1; i < 7; i += 2) {
          sColorChange.push(parseInt("0x" + sColor.slice(i, i + 2)));
        }
        return "RGB(" + sColorChange.join(",") + ")";
      }
      return sColor;
    };

    this.state = {
      rotateVal: new Animated.Value(0),
    }
  }

  componentDidMount() { // 组件加载完成后启动动画
    const animationLoading = Animated.timing(
      this.state.rotateVal, // 初始值
      {
        toValue: 360, // 终点值
        easing: Easing.linear, // 这里使用匀速曲线，详见RN-api-Easing
      }
    );
    Animated.loop(animationLoading).start(); // 开始动画
    // setTimeout(Animated.loop(animationLoading).stop, 5000); // 5秒后停止动画，可用于任意时刻停止动画
  }

  judageGrayLevel(color) {
    var RgbValue = color.replace("rgb(", "").replace(")", "");
    var RgbValueArry = RgbValue.split(",");
    var grayLevel = RgbValueArry[0] * 0.299 + RgbValueArry[1] * 0.587 + RgbValueArry[2] * 0.114;
    return grayLevel >= 192
  }

  render() {
    const styleWrapper = buttonsStyle[`${this.props.type}Wrapper`] || buttonsStyle.defaultWrapper;
    const styleText = buttonsStyle[`${this.props.type}Text`] || buttonsStyle.defaultText;
    const {
      responsive, textColorReverse, size, round,
      children, disabled, icon, iconPosition, loading,
      textStyle, btnStyle, loadingColor, loadingIcon
    } = this.props;
    const styleRound = round ? buttonsStyle.styleRound : undefined;



    const img = loading ? (loadingIcon || loadingImg) : icon;
    const currentFontSize = fontSizeMap[size];

    // const isBgWhite = btnStyle&& btnStyle.backgroundColor && this.judageGrayLevel(btnStyle.backgroundColor.colorRgb())
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
          {iconPosition === 'left' && img && <Animated.Image
            style={[
              { width: currentFontSize * 0.8, height: currentFontSize * 0.8, marginRight: 10 },
              { tintColor: loadingColor, },
              loading && {
                transform: [{
                  rotate: this.state.rotateVal.interpolate({
                    inputRange: [0, 360],
                    outputRange: ['0deg', '360deg'],
                  })
                }]
              }
            ]}
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
