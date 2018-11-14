/**
 * 导航栏组件
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
} from 'react-native';
import { topHeight } from '@MCRN/css';
import McrnNavBar from 'mcrn-ui/NavBar';
import navigation from '@MCRN/navigation';

const styles = StyleSheet.create({
  container: {
    borderBottomColor: '#EFEFEF',
    // borderBottomWidth: 1,
  },
  title: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '400',
  },
  leftBtn: {
    width: 30,
  },
  backImage: {
    width: 12,
    height: 21,
  },
  icon: {
    color: '#666',
    fontSize: 18,
  },
});


class NavBar extends Component {
  render() {
    return (
      <McrnNavBar {...this.props} />
    );
  }
}

NavBar.defaultProps = {
  ...McrnNavBar.defaultProps,
  style: styles.container,
  leftBtn: (
    <View style={styles.leftBtn}>
      <Image style={styles.backImage} source={require('../../image/Nav/back.png')} />
    </View>
  ),
  leftEvent: () => navigation.pop(),
  titleStyle: styles.title,
  statusBarHeight: topHeight,
};

export default NavBar;
