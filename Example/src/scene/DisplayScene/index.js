/* eslint-disable no-bitwise */
/* eslint-disable prefer-template */
/* eslint-disable import/imports-first */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { Page, NavBar, Body } from 'MCComponent';
import style from './style';
import { screen } from 'mcrn';
import * as demos from '../../demo';
import util from 'mcrn/util';

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
  getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const rgb = 'rgb(' + r + ',' + g + ',' + b + ')';
    return rgb;
  }


  render() {
    return (
      <Page style={style.container}>
        <NavBar
          title={(this.state.params && this.state.params.title) || '组件展示'}
          rightBtn="☀️更换主题"
          rightEvent={() => {
            util.changeTheme({
              primaryColor: this.getRandomColor(),
            });
          }}
        />
        <Body>
          {this.state.content}
        </Body>
      </Page>
    );
  }
}
