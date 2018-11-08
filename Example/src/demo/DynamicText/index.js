import React, {
  Component,
} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
} from 'react-native';
import All from 'mcrn-ui/All';
import Btn from 'mcrn-ui/Btn';
import DynamicText from 'mcrn-ui/DynamicText';
import {
  Article,
} from 'MCComponent';
import {
  COLOR_THEME,
} from 'mcrn-ui/constant';

const TEXT_ARR = [
  '为了使得我们今天晚上的这个环境更加的轻松一点，我回忆起我曾经在1945年、46年的大学年代，经常我们喜欢玩儿“Hawaii guitar”。',
  '我们要提高警惕，千万不可麻痹大意。我们要坚决地坚持到底，坚持奋战，坚持再坚持！我们就一定能够取得最后的胜利。',
  '人呐，不管你坐在什么位置，他不能不回忆起曾经培养过的母校，他不可能忘掉，这个我看中外一律。',
];

const styles = StyleSheet.create({
  articleTitle: {
    paddingLeft: 10,
  },
  demo1: {
    backgroundColor: COLOR_THEME,
    marginHorizontal: 20,
    paddingVertical: 10,
  },
  demo1Text: {
    color: '#fff',
    fontSize: 20,
  },
  btns: {
    paddingHorizontal: 10,
  },
  btn: {
    marginBottom: 5,
  },
});

class Page extends Component {
  static section = 'Data Display';

  constructor(props) {
    super(props);
    this.state = {
      text1: '开始:测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字:结束',
      text: '',
    };
    this.changeTimes = 0;
    this.changeText = this.changeText.bind(this);
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        text: 123,
      });
    }, 1000);
  }

  changeText() {
    // console.log(this.changeTimes % 3, TEXT_ARR[this.changeTimes % 3])
    this.setState({
      text: TEXT_ARR[this.changeTimes % 3],
    });
    this.changeTimes += 1;
  }

  render() {
    return (
      <All>
        <NavBar title="DynamicText" />
        <ScrollView style={styles.scrollView}>
          <Article titleStyle={styles.articleTitle} title="默认">
            <DynamicText>{this.state.text1}</DynamicText>
          </Article>
          <Article titleStyle={styles.articleTitle} title="自定义">
            <DynamicText
              style={styles.demo1}
              textStyle={styles.demo1Text}
              speed={10}
            >
              {this.state.text1}
            </DynamicText>
          </Article>
          <Article titleStyle={styles.articleTitle} title="测试">
            <DynamicText
              style={styles.reverse}
              textStyle={styles.reverseText}
            >{this.state.text}</DynamicText>
          </Article>
          <View style={styles.btns}>
            <Btn style={styles.btn} onPress={this.changeText}>
              更改文字内容
            </Btn>
          </View>
        </ScrollView>
      </All>
    );
  }
}

export default Page;
