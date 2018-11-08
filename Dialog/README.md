# Dialog

**警告弹框**

## Demo

<image src="http://wx3.sinaimg.cn/mw690/4c8b519dly1fdulkkgmsog20hs0wsn81.gif" width="320" />


## Example

```js
import Dialog from 'mcrn-ui/Dialog';

function Example(props) {
  return (
    <Dialog
      visible={this.state.visible}
      title="无法连接服务器"
      message="未能完成所请求的操作，因为与服务器的通信出错。"
      buttons={[{
        text: '吼啊',
        onPress: this.hide,
      }]}
    />
  );
}
```

## Props

```js
Dialog.propTypes = {
  // 是否显示
  visible: PropTypes.bool,
  // 标题
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  // 标题文本样式（title 为字符串时才生效）
  titleStyle: Text.propTypes.style,
  // 内容
  message: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  // 标题文本样式（title 为字符串时才生效）
  messageStyle: Text.propTypes.style,
  // 按钮容器样式
  buttonsContainerStyle: ViewPropTypes.style,
  // 按钮
  buttons: PropTypes.arrayOf(PropTypes.shape({
    // 按钮文本
    text: PropTypes.string,
    // 按钮样式
    style: Text.propTypes.style,
    // 按钮点击回调
    onPress: PropTypes.func,
  })),
  // 弹框样式
  style: ViewPropTypes.style,
  // 遮罩层样式
  overlayStyle: ViewPropTypes.style,
  // 是否使用 Overlay 动画
  useOverlayAnimation: PropTypes.bool,
  // Overlay 动画时长
  overlayAnimationDuration: PropTypes.number,
  // 显示回调
  onShow: PropTypes.func,
  // 隐藏回调
  onHide: PropTypes.func,
};
Dialog.defaultProps = {
  visible: false,
  title: '',
  titleStyle: null,
  message: '',
  messageStyle: null,
  buttonsContainerStyle: null,
  buttons: [],
  style: null,
  overlayStyle: null,
  useOverlayAnimation: true,
};
```
