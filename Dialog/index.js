import React, {
  Component,
} from 'react';
import {
  Platform,
  View,
  TouchableHighlight,
  Text,
  ViewPropTypes
} from 'react-native';
import PropTypes from 'prop-types';

import Overlay from '../Overlay';
import styles from './styles.js';

const isAndroid = Platform.OS === 'android';

class Dialog extends Component {

  makeBtns() {
    const len = this.props.buttons.length;

    return this.props.buttons.map((item, index) => {
      const btnStyle = [styles.btn];
      if (index === 0) {
        btnStyle.push(styles.btnFirst);
      }

      // fix android
      const btnTouchableStyle = [styles.btnTouchable];
      if (isAndroid) {
        if (index === 0) {
          btnTouchableStyle.push(styles.btnTouchableFirst);
        }
        if (index === len - 1) {
          btnTouchableStyle.push(styles.btnTouchableLast);
        }
      }

      return (
        <View style={btnStyle} key={index}>
          <TouchableHighlight
            underlayColor="#ebebeb"
            style={btnTouchableStyle}
            onPress={item.onPress}
          >
            <Text
              style={[styles.btnText, item.style]}
              numberOfLines={1}
            >
              {item.text}
            </Text>
          </TouchableHighlight>
        </View>
      );
    });
  }

  makeTitle() {
    let title = this.props.title;
    if (typeof title === 'string') {
      title = (
        title ? (
          <View style={styles.titleContainer}>
            <Text style={[styles.title, this.props.titleStyle]}>
              {title}
            </Text>
          </View>
        ) : null
      );
    }
    return title;
  }
  makeMessage() {
    let message = this.props.message;
    if (typeof message === 'string') {
      message = message ? (
        <Text style={[styles.message, this.props.messageStyle]}>
          {message}
        </Text>
      ) : null;
    }
    return message;
  }

  render() {
    const title = this.makeTitle();
    const message = this.makeMessage();

    return (
      <Overlay
        visible={this.props.visible}
        style={[styles.overlay, this.props.overlayStyle]}
        useAnimation={this.props.useOverlayAnimation}
        duration={this.props.overlayAnimationDuration}
        onShow={this.props.onShow}
        onHide={this.props.onHide}
      >
        <View style={[styles.dialog, this.props.style]}>
          <View style={styles.content}>
            { title }
            { message }
          </View>
          <View style={[styles.btnsContainer, this.props.buttonsContainerStyle]}>
            {
              this.makeBtns()
            }
          </View>
        </View>
      </Overlay>
    );
  }
}

Dialog.propTypes = {
  // 是否显示
  visible: PropTypes.bool,
  // 标题
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  // 标题文本样式（title 为字符串时才生效）
  titleStyle: Text.propTypes.style,
  // 内容
  message: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  // 标题文本样式（title 为字符串时才生效）
  messageStyle: Text.propTypes.style,
  // 按钮容器样式
  buttonsContainerStyle: ViewPropTypes.style,
  // 按钮
  buttons: PropTypes.arrayOf(PropTypes.shape({
    /* eslint-disable */
    // 按钮文本
    text: PropTypes.string,
    // 按钮样式
    style: Text.propTypes.style,
    // 按钮点击回调
    onPress: PropTypes.func,
    /* eslint-enable */
  })),
  // 弹框样式
  style: ViewPropTypes.style,
  // 遮罩层样式
  overlayStyle: ViewPropTypes.style,
  // 是否使用 Overlay 动画
  useOverlayAnimation: PropTypes.bool,
  // Overlay 动画时长
  overlayAnimationDuration: PropTypes.number,
  // 显示回调
  onShow: PropTypes.func,
  // 隐藏回调
  onHide: PropTypes.func,
};
Dialog.defaultProps = {
  visible: false,
  title: '',
  titleStyle: null,
  message: '',
  messageStyle: null,
  buttonsContainerStyle: null,
  buttons: [],
  style: null,
  overlayStyle: null,
  useOverlayAnimation: true,
};

export default Dialog;
