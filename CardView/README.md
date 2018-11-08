# CardView

**卡片视图**

以卡片样式浏览，并可以设置激活卡片样式。

通过 `getEl` 属性获取 CardView 实例，调用 `scrollToCard` 方法可以

### ⚠️ 注意

1. CardView 会为卡片添加 `isActiveMcrnUiCardView` 属性，激活卡片值为 `true`，其他卡片是 `false`。
2. CardView 内部是使用 `PanResponder` 实现的，在 ScrollView 中使用时会出现停止工作的现象。针对该问题可以使用 CardView 的两个属性 `onPanResponderGrant` 和 `onPanResponderRelease` 来手动控制 ScrollView 的滚动开关。具体做法如下：

    ```js
    /* this.state.scroll 默认值为 true */
    <ScrollView
      scrollEnabled={this.state.scroll}
    >
      <CardView
        onPanResponderGrant={
          () => this.setState({ scroll: false })
        }
        onPanResponderRelease={
          () => this.setState({ scroll: true })
        }
      />
    </ScrollView>
    ```

## Demo

<image src="http://wx3.sinaimg.cn/mw690/4c8b519dly1fdgvohgt53g20hs0wsaip.gif" width="320" />

## Example

```js
import CardView from 'mcrn-ui/CardView';

function Example(props) {
  return (
    <CardView
      style={styles.cardView}
      cards={this.state.cards}
      cardGap={20}
      onChange={this.onChange}
    />
  );
}
```

## Props

```js
CardViewPropTypes = {
  // 样式
  style: ViewPropTypes.style,
  // 缩放系数
  scaleCoefficient: PropTypes.number,
  // 当前卡片样式
  activeCardStyle: ViewPropTypes.style,
  // 卡片数组
  cards: PropTypes.arrayOf(PropTypes.shape({
    // 数组循环优化标示 key
    key: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    // 卡片元素
    card: PropTypes.element,
  })),
  // 卡片宽度
  cardWidth: PropTypes.number,
  // 卡片间隔
  cardGap: PropTypes.number,
  // 自定义内容容器样式
  contentContainerStyle: ViewPropTypes.style,
  // 卡片切换时的回调，参数为当前激活的卡片序号
  onChange: PropTypes.func,
  // 卡片经过时的回调，参数为当前经过的卡片序号
  onPass: PropTypes.func,
  // 速度指数
  v: PropTypes.number,
  // 手势滑动触发最小距离（默认需要滑动卡片一半的距离）
  minGestureDistance: PropTypes.number,
  // 最大可访问的卡片序号
  maxIndex: PropTypes.number,
  // 获取元素回调
  getEl: PropTypes.func,
  // 到达顶部回调
  onStartReached: PropTypes.func,
  // 到达底部回调
  onEndReached: PropTypes.func,
  // 开始手势操作回调
  onPanResponderGrant: PropTypes.func,
  // 放开手势操作回调
  onPanResponderRelease: PropTypes.func,
};
CardView.defaultProps = {
  style: null,
  scaleCoefficient: 0.1,
  activeCardStyle: null,
  cards: [],
  cardWidth: 200,
  cardGap: 0,
  contentContainerStyle: null,
  onChange: NOOP,
  onPass: NOOP,
  v: 20,
  minGestureDistance: null,
  maxIndex: null,
  getEl: NOOP,
  onStartReached: NOOP,
  onEndReached: NOOP,
  onPanResponderGrant: NOOP,
  onPanResponderRelease: NOOP,
};
```

## Methods

### scrollToCard(index)

- **index**: {Number} 卡片序号

跳转至指定卡片
