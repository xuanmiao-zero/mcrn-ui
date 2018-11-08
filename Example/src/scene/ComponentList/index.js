import React, { Component } from 'react';
import { FlatList, Text, View, TouchableWithoutFeedback } from 'react-native';
import { Page, Body, SearchHeader, NavBar } from 'MCComponent';
import { navigation } from '@MCRN';
import styles from './style';
import * as demos from '../../demo';

export default class ComponentList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      componentList: props.componentList,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      // navigation.resetRoute('TabScene');
    }, 5000);
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
          <NavBar leftBtn={<View />} title="组件列表" />
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
