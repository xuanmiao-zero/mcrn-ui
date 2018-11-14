/* eslint-disable no-bitwise */
/* eslint-disable prefer-template */
import React, { Component } from 'react';
import { FlatList, Text, View, TouchableWithoutFeedback } from 'react-native';
import { Page, Body, SearchHeader, NavBar } from 'MCComponent';
import { navigation } from '@MCRN';
import util from 'mcrn/util';
import styles from './style';
import * as demos from '../../demo';

export default class ComponentList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      componentList: props.componentList,
    };
  }

  getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const rgb = 'rgb(' + r + ',' + g + ',' + b + ')';
    return rgb;
  }

  renderItem = ({ item }) => { //eslint-disable-line
    return (<TouchableWithoutFeedback
      onPress={() => {
        navigation.push('TabScene', item);
      }}
    >
      <View style={styles.rowContainer}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemDesc}>{item.desc}</Text>
      </View>
    </TouchableWithoutFeedback>);
  }

  onChangeText = (text) => {
    this.setState({
      componentList: this.props.componentList.filter(e =>
        e.title.toLowerCase().indexOf(text.toLowerCase()) > -1),
    });
  }


  render() {
    return (
      <Page>
        <Body>
          <NavBar
            leftBtn="更换主题"
            leftEvent={() => {
              util.changeTheme({
                primaryColor: this.getRandomColor(),
              });
            }}
            title="组件列表"
          />
          <SearchHeader
            onChangeText={this.onChangeText}
          />
          <FlatList
            data={this.state.componentList}
            keyExtractor={(item, index) => index.toString()}
            renderItem={this.renderItem}
          />

        </Body>
      </Page>
    );
  }
}


ComponentList.defaultProps = {
  componentList: Object.keys(demos).map((ele) => {
    const item = {
      title: ele,
      desc: `${ele} demo`,
    };
    return item;
  }),
};
