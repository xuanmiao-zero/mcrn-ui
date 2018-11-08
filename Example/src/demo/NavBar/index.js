import React from 'react';
import {
  StyleSheet,
  View,
  Image,
} from 'react-native';
import RnxUiNavBar from 'mcrn-ui/NavBar';
import { topHeight } from '@MCRN/css';
import { navigation } from 'mcrn';
import { NAV_BACK_IMG } from 'MCImage';


class NavBar extends RnxUiNavBar {}

// const COLOR_NAVBAR_TEXT = '#fff';

const styles = StyleSheet.create({
  leftBtn: {
    width: 30,
  },
  backImage: {
    width: 12,
    height: 21,
  },
});

NavBar.defaultProps = {
  ...RnxUiNavBar.defaultProps,
  leftBtn: (
    <View style={styles.leftBtn}>
      <Image style={styles.backImage} source={NAV_BACK_IMG} />
    </View>
  ),
  leftEvent: () => navigation.pop(),
  statusBarHeight: topHeight,
};

export default NavBar;
