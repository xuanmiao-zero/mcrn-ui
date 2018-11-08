# NumericKeyboard

**虚拟数字键盘**

很多情况下系统的数字键盘不能满足我们的要求，比如不同平台数字键盘表现不一致，比如有的数字键盘存在小数点，比如需要配合虚拟输入框而系统的键盘又不易控制...

## Demo

<image src="http://wx2.sinaimg.cn/mw690/4c8b519dly1fbztgpbw6gg20ho0wgx6p.gif" width="320" />

## Example

```js
import NumericKeyboard from 'mcrn-ui/NumericKeyboard';

function Example(props) {
  return (
    <NumericKeyboard
      onPress={this.onInput}
    />
  );
}
```

## Props

```js
NumericKeyboard.propTypes = {
  // 自定义样式
  style: ViewPropTypes.style,
  // 按键回调
  onPress: PropTypes.func,
  // 删除键内容
  deleteKeyContent: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.array]),
  // 左下角空白键
  bottomLeftButton: PropTypes.shape({
    // 样式类型
    type: Key.propTypes.type,
    // 是否禁用
    disabled: Key.propTypes.disabled,
    // 值
    value: Key.propTypes.value,
    // 子元素
    children: Key.propTypes.children,
  }),
};
NumericKeyboard.defaultProps = {
  style: null,
  onPress: NOOP,
  deleteKeyContent: <Image source={delImgSource} />,
  bottomLeftButton: {
    type: 'dark',
    disabled: true,
    value: '',
    children: null,
  },
};
```
