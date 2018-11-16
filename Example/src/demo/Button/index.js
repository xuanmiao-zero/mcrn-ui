/**
 *name: index.js
 *describe: Button
 *time: 2018/11/16 3:39 PM
 *author: yangshuo
 */

import React, { PureComponent } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Button from 'mcrn-ui/Button';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  container1: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: Dimensions.get('window').width * 0.5,
    flexDirection: 'row',
  },
  rowItem: {
    justifyContent: 'space-between',
    height: Dimensions.get('window').height * 0.5,
  },
  container2: {
    justifyContent: 'space-around',
    width: Dimensions.get('window').width,
    flexDirection: 'row',
    alignItems: 'center',
  },
  container3: {
    alignItems: 'center',
    justifyContent: 'space-around',
    width: Dimensions.get('window').width,
    flexDirection: 'row',
  },
});

export default class Page extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container1}>
          <View style={styles.rowItem}>
            <Button type={'default'}>轩邈</Button>
            <Button type={'primary'}>轩邈</Button>
            <Button type={'success'}>轩邈</Button>
            <Button type={'info'}>轩邈</Button>
            <Button type={'warning'}>轩邈</Button>
            <Button type={'danger'}>轩邈</Button>
            <Button type={'disabled'}>轩邈</Button>
          </View>
          <View style={styles.rowItem}>
            <Button type={'default'} round>轩邈</Button>
            <Button type={'primary'} round>轩邈</Button>
            <Button type={'success'} round>轩邈</Button>
            <Button type={'info'} round>轩邈</Button>
            <Button type={'warning'} round>轩邈</Button>
            <Button type={'danger'} round>轩邈</Button>
            <Button type={'disabled'} round>轩邈</Button>
          </View>
        </View>
        <Button type={'info'} disabled>轩邈</Button>
        <View style={styles.container2}>
          <Button type={'info'} icon={require('./back_white.png')}>轩邈</Button>
          <Button type={'info'} icon={require('./back_white.png')} iconPosition={'right'}>轩邈</Button>
        </View>
        <Button type={'info'} loading loadingColor={'#fff'} loadingIcon={require('./back_white.png')}>轩邈</Button>
        <Button
          type={'info'}
          btnStyle={{ borderColor: 'green', paddingHorizontal: 50 }}
          textStyle={{ color: 'yellow', fontSize: 28 }}
        >轩邈</Button>
        <View style={styles.container3}>
          <Button size={'sm'}>轩邈</Button>
          <Button>轩邈</Button>
          <Button size={'lg'}>轩邈</Button>
        </View>
      </View>
    );
  }
}
