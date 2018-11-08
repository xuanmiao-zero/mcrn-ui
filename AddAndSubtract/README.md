# AddAndSubtract

**加减法动画组件**

带有动画的加减法组件

## Demo

<image src="http://wx3.sinaimg.cn/mw690/4c8b519dly1fcaq7v2pnvg20ho0wgh0z.gif" width="320" />

## Example

```js
import Template from 'mcrn-ui/Template';

function Example(props) {
  return (
    <AddAndSubtract
      num={this.state.num}
      onPressAdder={this.add}
      onPressSubtracter={this.subtract}
    />
  );
}
```

## Props

```js
AddAndSubtract.propTypes = {
  // 数字
  num(props, propName) {
    const num = props[propName];
    if (typeof num !== 'number') {
      return new Error('AddAndSubtract.props.num must be a number.');
    }
    if (num < 0) {
      return new Error('AddAndSubtract.props.num must be greater than 0.');
    }
    return null;
  },
  // 加法按钮点击事件
  onPressAdder: PropTypes.func,
  // 减法按钮点击事件
  onPressSubtracter: PropTypes.func,
  // 动画时间
  duration: PropTypes.number,
  // 减法按钮移动距离
  distance: PropTypes.number,
  // 减法旋转角度
  deg: PropTypes.number,
  // 动画函数
  easing: PropTypes.func,
  // 按钮宽度
  btnWidth: PropTypes.number,
  // 自定义样式
  style: ViewPropTypes.style,
  // 加法按钮样式
  adderBtnStyle: ViewPropTypes.style,
  // 加法元素样式
  adderStyle: ViewPropTypes.style,
  // 加法元素触摸时底色
  adderUnderlayColor: TouchableHighlight.propTypes.underlayColor,
  // 减法按钮容器样式
  subtracterWrapperStyle: ViewPropTypes.style,
  // 减法按钮样式
  subtracterBtnStyle: ViewPropTypes.style,
  // 减法元素样式
  subtracterStyle: ViewPropTypes.style,
  // 减法元素触摸时底色
  subtracterUnderlayColor: TouchableHighlight.propTypes.underlayColor,
  // 自定义字体样式
  textStyle: Text.propTypes.style,
  // 加法按钮
  adder: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
  // 减法按钮
  subtracter: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
  // 按钮热区
  hitSlop: TouchableHighlight.propTypes.hitSlop,
};
AddAndSubtract.defaultProps = {
  num: 0,
  onPressAdder: NOOP,
  onPressSubtracter: NOOP,
  duration: 200,
  distance: 30,
  deg: 180,
  easing: t => t,
  btnWidth: 30,
  style: null,
  adderBtnStyle: null,
  adderStyle: null,
  adderUnderlayColor: '#bbb',
  subtracterWrapperStyle: null,
  subtracterBtnStyle: null,
  subtracterStyle: null,
  subtracterUnderlayColor: '#bbb',
  textStyle: null,
  adder: <Text style={styles.adderText}>+</Text>,
  subtracter: <Text style={styles.subtracterText}>-</Text>,
  hitSlop: {
    top: 5,
    left: 5,
    right: 5,
    bottom: 5,
  },
};
```
