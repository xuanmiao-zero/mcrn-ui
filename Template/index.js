/**
 * 组件开发模板
 * 注意：
 * 这个不是供业务使用的组件，而是为 mcrn-ui 开发提供的组件模板
 */
import React, {
  Component,
} from 'react';
import {
  StyleSheet,
  View,
  ViewPropTypes
} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  all: {

  },
});

// mcrn-ui 组件一律不允许使用 stateless function 构建
class Template extends Component {
  render() {
    return (
      <View style={[styles.all, this.props.style]}>
        {
          this.props.children
        }
      </View>
    );
  }
}

Template.propTypes = {
  // 自定义样式
  style: ViewPropTypes.style,
  // 子元素
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
};
Template.defaultProps = {
  style: null,
  children: null,
};

export default Template;
