import React, {
  Component,
} from 'react';
import {
  StyleSheet,
} from 'react-native';
import All from 'mcrn-ui/All';
import ActionSheet from 'mcrn-ui/ActionSheet';
import {
  List,
} from 'MCComponent';

const styles = StyleSheet.create({
  btnText: {
    color: '#333',
  },
  cancelBtnText: {
    fontWeight: 'normal',
  },
});

const items = [
  {
    content: '默认',
    onPress() {
      this.show(0);
    },
  },
  {
    content: '自定义',
    onPress() {
      this.show(1);
    },
  },
];

class Page extends Component {
  static section = 'Feedback';

  constructor(props) {
    super(props);
    this.state = {
      demo0: false,
      demo1: false,
    };
    this.hideMaker = this.hideMaker.bind(this);
  }

  show(index) {
    const state = {};
    state[`demo${index}`] = true;
    this.setState(state);
  }

  hide(index) {
    const state = {};
    state[`demo${index}`] = false;
    this.setState(state);
  }

  hideMaker(index) {
    return this.hide.bind(this, index);
  }

  render() {
    return (
      <All>
        <List
          items={items}
          pressContext={this}
        />
        <ActionSheet
          visible={this.state.demo0}
          onClose={this.hideMaker(0)}
          btnList={[{
            text: '默认',
            onPress: this.hideMaker(0),
          }, {
            text: '相册',
            onPress: this.hideMaker(0),
          }]}
        />
        <ActionSheet
          visible={this.state.demo1}
          onClose={this.hideMaker(1)}
          btnTextStyle={styles.btnText}
          btnList={[{
            text: '拍照',
            onPress: this.hideMaker(1),
          }, {
            text: '相册',
            onPress: this.hideMaker(1),
          }]}
          cancelBtnTextStyle={styles.cancelBtnText}
        />
      </All>
    );
  }
}


export default Page;
