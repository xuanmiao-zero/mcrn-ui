# PhoneNumInput

**手机号码输入框**

> mcrn-ui 表单校验工具 [Validator](https://github.com/dragonwong/mcrn-ui/tree/master/util/Validator) 现已支持该组件。

## Demo

![](demo.png)

## Props

```js
PhoneNumInput.propTypes = {
  // 自定义样式
  style: ViewPropTypes.style,
  // 自定义输入框样式
  inputStyle: TextInput.propTypes.style,
  // 提示文字
  placeholder: PropTypes.string,
  // 提示文字颜色
  placeholderTextColor: PropTypes.string,
  // 校验器接口
  collectValidate: PropTypes.func,
  // 默认值
  defaultValue: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  // 用来在校验器中做标识
  name: PropTypes.string,
  // 用来在校验器中组成错误信息
  readableName: PropTypes.string,
  // 改变回调
  onChangeText: PropTypes.func,
};
PhoneNumInput.defaultProps = {
  style: null,
  inputStyle: null,
  placeholder: '手机号',
  placeholderTextColor: COLOR_PLACEHOLDER,
  collectValidate: NOOP,
  defaultValue: '',
  name: 'PHONE_NUM_INPUT',
  readableName: '手机号',
  onChangeText: NOOP,
};
```
