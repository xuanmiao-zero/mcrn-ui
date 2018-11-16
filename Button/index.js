import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  TouchableHighlight,
  TouchableOpacity,
  PixelRatio,
  View, Image,
} from 'react-native';

const px = 1 / PixelRatio.get();
import buttonsStyle from './style/buttons';
import { fontSize, button } from './style/varibles';

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
  }
};

export default class Button extends React.Component {
  static propTypes = {};
  static defaultProps = {
    type: 'default',
    size: 'md',
    style: {},
    textColorReverse: false,
    responsive: true,
    round: false,
    disabled: false,
    iconPosition: 'left',
    onPress: () => {
    },
  };

  render() {
    const styleWrapper = buttonsStyle[ this.props.type + 'Wrapper' ] || buttonsStyle.defaultWrapper;
    const styleText = buttonsStyle[ this.props.type + 'Text' ] || buttonsStyle.defaultText;
    const { responsive, textColorReverse, size, round, children, disabled, icon, iconPosition, loading } = this.props
    const styleRound = round ? buttonsStyle.styleRound : undefined

    let img =  loading ? require('./loading.gif') : icon
    let  fontSize = fontSizeMap[size ]
    return (
      <TouchableOpacity
        style={{ ...(typeof this.props.style === 'object' ? this.props.style : {}), flexDirection: 'row', }}
        onPress={disabled ? () => {} : this.props.onPress}
        activeOpacity={disabled ? 1 : 0.3}
      >

        <View
          style={[
            styleWrapper,
            { flex: responsive ? 1 : null },
            { ...(paddingMap[ size ] || paddingMap[ 'md' ]) },
            styleRound,
            {opacity: disabled? 0.5 : 1}
          ]}>

          {/*左侧图标*/}
          {iconPosition === 'left' && <Image
            style={{width: fontSize  * 0.8, height: fontSize * 0.8, marginRight:10}}
            source={img}
          />}

          {
            React.isValidElement(children) ?
              children :
              children !== undefined ?
                <Text
                  style={[
                    styleText,
                    { fontSize: fontSize || fontSizeMap[ 'md' ], },
                    textColorReverse ? { color: '#fff' } : undefined,
                  ]}>
                  {children}
                </Text> :
                null
          }

          {/*右侧图标*/}
          {iconPosition === 'right' && <Image
            style={{width: fontSize  * 0.7, height: fontSize * 0.7, marginLeft:10}}
            source={icon}
          />}
        </View>
      </TouchableOpacity>
    );
  }
}
