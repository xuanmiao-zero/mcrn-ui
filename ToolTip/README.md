# ToolTip

**提示框**

## Demo

![ToolTip](http://wx2.sinaimg.cn/mw690/4c8b519dly1fdlfmi544kg20hs0wswjd.gif)

## Example

```js
import ToolTip from 'mcrn-ui/ToolTip';

function Example(props) {
  return (
    <ToolTip
      visible={this.state.visible}
      text="默认"
    />
  );
}
```

## Props

```js
ToolTip.propTypes = {
  // 显示开关
  visible: PropTypes.bool.isRequired,
  // 显示文本
  text: PropTypes.string.isRequired,
  // 遮罩层样式
  overlayStyle: ViewPropTypes.style,
  // 文本容器样式
  textWrapperStyle: ViewPropTypes.style,
  // 文本样式
  textStyle: Text.propTypes.style,
  // 控制 Overlay 是否可以作为触控事件的目标（参考 https://facebook.github.io/react-native/docs/view.html#pointerevents）
  pointerEvents: Overlay.propTypes.pointerEvents,
  // 是否使用 Overlay 动画
  useOverlayAnimation: PropTypes.bool,
  // Overlay 动画时长
  overlayAnimationDuration: PropTypes.number,
  // 显示回调
  onShow: PropTypes.func,
  // 隐藏回调
  onHide: PropTypes.func,
};
ToolTip.defaultProps = {
  visible: false,
  text: '',
  overlayStyle: null,
  textWrapperStyle: null,
  textStyle: null,
  pointerEvents: 'none',
};
```

## Other Points

- 内部封装了 Overlay 组件，请参考 [Overlay](https://github.com/dragonwong/mcrn-ui/tree/master/Overlay)
