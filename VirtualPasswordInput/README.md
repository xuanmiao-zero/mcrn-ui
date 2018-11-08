# VirtualPasswordInput

**虚拟密码输入框**

## Demo

![VirtualPasswordInput](http://wx1.sinaimg.cn/mw690/4c8b519dly1fbztgvfczlg20ho0wghdv.gif)

## Example

```js
import VirtualPasswordInput from 'mcrn-ui/VirtualPasswordInput';

function Example(props) {
  return (
    <VirtualPasswordInput
      onPress={this.onPressPswdInput}
      value={this.state.pswd}
    />
  );
}
```

## Props

```js
VirtualPasswordInput.propTypes = {
  // 值
  value: PropTypes.string,
  // 是否启用安全输入
  secureTextEntry: PropTypes.bool,
  // 最外层样式
  style: ViewPropTypes.style,
  // 容器样式
  containerStyle: ViewPropTypes.style,
  // 单个输入框样式
  cellStyle: ViewPropTypes.style,
  // 安全码样式
  secureStyle: ViewPropTypes.style,
  // 文本样式
  textStyle: Text.propTypes.style,
  // 最大长度
  maxLength: PropTypes.number,
  // 点击回调
  onPress: PropTypes.func,
};
VirtualPasswordInput.defaultProps = {
  value: '',
  secureTextEntry: true,
  style: null,
  containerStyle: null,
  cellStyel: null,
  secureStyle: null,
  textStyle: null,
  maxLength: 6,
  onPress: NOOP,
};
```
