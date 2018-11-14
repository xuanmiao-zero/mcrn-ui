import React, {
  Component,
} from 'react';
import {
  Picker,
} from 'react-native';
import All from 'mcrn-ui/All';
import HeaderedSheet from 'mcrn-ui/HeaderedSheet';
import List from 'MCComponent/List';

const items = [
  {
    content: '出现吧！',
    onPress() {
      this.show(0);
    },
  },
];

class Page extends Component {
  static section = 'Feedback';

  constructor(props) {
    super(props);
    this.state = {
      demo0: false,
    };
    this.hide = this.hide.bind(this);
  }

  show(index) {
    const state = {};
    state[`demo${index}`] = true;
    this.setState(state);
  }

  hide() {
    this.setState({
      demo0: false,
    });
  }

  render() {
    return (
      <All>
        <List
          items={items}
          pressContext={this}
        />
        <HeaderedSheet
          visible={this.state.demo0}
          title="选择坠吼的语言"
          leftBtn="取消"
          onPressLeftBtn={this.hide}
          rightBtn="确定"
          onPressRightBtn={this.hide}
        >
          <Picker>
            <Picker.Item label="php" value="php" />
            <Picker.Item label="java" value="java" />
            <Picker.Item label="js" value="js" />
          </Picker>
        </HeaderedSheet>
      </All>
    );
  }
}


export default Page;
