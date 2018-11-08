/* eslint-disable import/imports-first */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { Image, View, ListView } from 'react-native';
import { Page, NavBar, Body } from 'MCComponent';
import style from './style';
import { screen } from 'mcrn';
import * as demos from '../../demo';

@screen
export default class DisplayScene extends Component {
  constructor(props) {
    super(props);
    const { params } = this.props.navigation.state;
    const Tag = demos[params.title];
    this.state = {
      params,
      content: <Tag />,
    };
  }


  render() {
    return (
      <Page style={style.container}>
        <NavBar
          title={(this.state.params && this.state.params.title) || '组件展示'}
        />
        <Body>
          {this.state.content}
        </Body>
      </Page>
    );
  }
}
