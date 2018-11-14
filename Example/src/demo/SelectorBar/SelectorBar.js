/* eslint-disable no-dupe-keys */
/* eslint-disable no-return-assign */
/* eslint-disable no-use-before-define */

import React, { Component } from 'react';

import {
    StyleSheet,
    View,
    TouchableOpacity,
    Text,
    Platform,
    Image,
    ScrollView,
    Animated,
    ViewPropTypes,
} from 'react-native';
import { DEVICE_WIDTH, fixSize, isIOS } from 'mcrn/device';
import PropTypes from 'prop-types'; //eslint-disable-line
import Btn from 'mcrn-ui/Btn';
import { ARROW_DOWN, CHECK } from 'MCImage';


const styles = StyleSheet.create({
  selectWrapper: {
    zIndex: 999,
    overflow: 'visible',
    backgroundColor: '#FFF',
  },
  select: {
    height: 40,
    zIndex: 999,
    flexDirection: 'row',
    overflow: 'visible',
  },
  option: {
    height: 40,
    backgroundColor: '#FFF',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: fixSize(0.5),
    borderTopWidth: 0,
    borderColor: '#E7E7E7',

  },
  optionText: {
    flex: 1,
    textAlign: 'left',
    paddingHorizontal: 20,
  },
  optionBtn: {
    borderWidth: 1,
  },

  bottomWrap: {
    flex: 0,
    position: 'relative',
    bottom: 0,
    left: 0,
    width: DEVICE_WIDTH,
    height: fixSize(44),
    flexDirection: 'row',
    borderTopColor: '#F5F5F5',
    borderTopWidth: fixSize(1),
    borderBottomColor: '#F5F5F5',
    borderBottomWidth: fixSize(1),

  },
  resetBtn: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  confirmBtn: {
    flex: 1,
    backgroundColor: '#EA5D4F',
  },
});

class SelectorBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      options: props.options,
      showSelectPanel: false,
      selectOptionIndex: -1,
      rotateValue: new Animated.Value(0),
    };
  }

  componentDidMount() {
  }

  showSelectPanelWithIndex = (index = -1) => {
    this.inited = true;
    this.setState({
      selectOptionIndex: index,
    }, () => {
      this.scrollPanel.scrollTo({ x: 0, y: 0, animated: false });
      this.state.rotateValue.setValue(1);
    });
  }


  itemPress = (_item) => {
    const { optionsData, multi } = this.state.options[this.state.selectOptionIndex];
    const newOptionsData = optionsData.map((item) => {
      if (item.value === _item.value) {
        item.selected = !item.selected;
      } else if (!multi && item.value !== _item.value) {
        item.selected = false;
      }
      return item;
    });
    const newOptions = this.state.options.map((ele, index) => {
      if (index === this.state.selectOptionIndex) {
        return {
          ...ele,
          optionsData: newOptionsData,
        };
      }
      return ele;
    });
    this.setState({
      options: newOptions,
    });
  }


  onConfirm = () => {
    this.setState({
      selectOptionIndex: -1,
    }, () => {
      if (this.props.onConfirm) {
        this.props.onConfirm(this.state.options);
      }
    });
  }

  onReset = () => {
    this.setState({
      selectOptionIndex: -1,
    }, () => {
      if (this.props.onReset) {
        this.props.onReset(this.state.options);
      }
    });
  }

  renderOptions() {
    const { optionsData } = this.state.options[this.state.selectOptionIndex];
        // 解决android下option之间的间隙
    const stylepatch = Platform.OS === 'ios' ? null : { marginTop: -1 };
    const options = optionsData.map((item, index) => {
      const check = (
        <View style={{ position: 'absolute', right: 10, top: 14 }}>
          <Image
            style={{
              width: 20,
              height: 20,
            }}
            source={CHECK}
          />
        </View>
                );

      return (
        <TouchableOpacity key={index} onPress={() => this.itemPress(item)}>
          <View style={[styles.option, stylepatch, { width: 375 }]}>
            <Text style={styles.optionText}>{item.name}</Text>
            {item.selected && check}
          </View>
        </TouchableOpacity>
      );
    });
    return (
      <View
        style={{
          flex: 0,
          position: 'absolute',
          top: 40,
          zIndex: 999,
          backgroundColor: '#fff',
          shadowOffset: { width: 0, height: 5 },
          shadowOpacity: 0.5,
          shadowRadius: 5,
          shadowColor: '#999',
          elevation: 4,
          zIndex: isIOS ? 1 : 0,
        }}
      >
        <ScrollView
          ref={ref => this.scrollPanel = ref}
          style={{ maxHeight: 200 }}
          contentContainerStyle={{ backgroundColor: '#FFF' }}
        >
          {options}
        </ScrollView>
        {
          <View style={styles.bottomWrap}>
            <Btn
              key="reset"
              style={styles.resetBtn}
              textStyle={{ color: '#333' }}
              onPress={this.onReset}
            >重置</Btn>
            <Btn
              key="confirm"
              onPress={this.onConfirm}
              style={styles.confirmBtn}
            >
       确认
     </Btn>
          </View>
        }
      </View>
    );
  }


  render() {
    this.menu = [];
    const { selectOptionIndex } = this.state;
    const { titleContainerStyle, titleTextStyle, checkIcon } = this.props;
    return (
      <View style={styles.selectWrapper}>
        <View style={styles.select}>
          {
            this.state.options.map((ele, index) => {
              let showName = '';
              ele.optionsData.forEach((item) => {
                if (item.selected && item.value !== -1) {
                  showName = showName + item.name + (ele.multi ? '、' : '');
                }
              });
              showName = showName.slice(0, showName.length - 1) || ele.title;
              return (<TouchableOpacity
                key={index}
                style={[{ flex: 1 }, titleContainerStyle]}
                onPress={() => this.showSelectPanelWithIndex(index)}
              >
                <View style={[styles.option, { flex: 1 }, titleContainerStyle]}>
                  <Text style={[styles.optionText, { textAlign: 'center' }, titleTextStyle]}>{showName}</Text>
                  <View style={{ position: 'absolute', right: 10, top: 13 }}>
                    <Animated.Image
                      style={{
                        width: 10,
                        height: 10,
                        transform: [
                          { rotateZ: (index === this.state.selectOptionIndex || !this.inited) ?
                          this.state.rotateValue.interpolate({
                            inputRange: [0, 1],
                            outputRange: ['-90deg', '0deg'],
                          }) : this.state.rotateValue.interpolate({
                            inputRange: [0, 1],
                            outputRange: ['0deg', '-90deg'],
                          }) },
                        ],
                      }}
                      source={checkIcon}
                    />
                  </View>
                </View>
              </TouchableOpacity>);
            })
          }
        </View>
        {selectOptionIndex > -1 && this.renderOptions()}
      </View>
    );
  }

}

SelectorBar.defaultProps = {
  onConfirm: () => {},
  onReset: () => {},
  options: [],
  titleContainerStyle: {},
  titleTextStyle: {},
  checkIcon: ARROW_DOWN,
};
SelectorBar.propTypes = {
  onConfirm: PropTypes.func,
  onReset: PropTypes.func,
  options: PropTypes.array,
  titleContainerStyle: ViewPropTypes.style,
  titleTextStyle: ViewPropTypes.style,
  checkIcon: Image.source,
};

export default SelectorBar;
