/* eslint-disable no-multi-spaces */
import React, { Component } from 'react';
import { Page, Body, NavBar } from 'MCComponent';
import { screen, mconnect } from '@MCRN';
import style from './style';

@mconnect({ accountData: 'UserAccount' }) @screen
export default class CodeScene extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
    };
  }

  render() {
    return (
      <Page style={style.container}>
        <NavBar title="代码示例" />
        <Body noPadding />
      </Page>
    );
  }
}
