# Progress

**进度条**

## Demo

![400*650](demo.png)

## Example

```js
import Progress from 'mcrn-ui/Progress';

function Example(props) {
  return (
    <Progress value={0.75} />
  );
}
```

## Props

```js
Progress.propTypes = {
  // 容器样式
  style: ViewPropTypes.style,
  // 进度条宽度
  width: PropTypes.number,
  // 进度条背景样式
  outerStyle: ViewPropTypes.style,
  // 进度条样式
  innerStyle: ViewPropTypes.style,
  // 动画时长
  duration: PropTypes.number,
  // 进度值
  value: PropTypes.number,
  // 是否显示进度值
  valueVisible: PropTypes.bool,
  // 进度值样式
  valueStyle: Text.propTypes.style,
  // 进度值格式函数
  valueFormater: PropTypes.func,
};
Progress.defaultProps = {
  style: null,
  width: 10,
  outerStyle: null,
  innerStyle: null,
  duration: 300,
  value: 0,
  valueVisible: true,
  valueStyle: null,
  valueFormater(value) {
    let percent;
    if (value < 0) {
      percent = 0;
    } else if (value > 1) {
      percent = 100;
    } else {
      percent = Math.round(value * 100);
    }
    return `${percent}%`;
  },
};
```
