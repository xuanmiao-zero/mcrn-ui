/*
 * 路由自动配置页
 */

// Tab 配置 一定要取名 TabConfig  对应 TabScene
export const TabConfig = {
  DisplayScene: {
    tabBarLabel: '演示',
    normalImage: require('MCImage/tabbar/menuIcon.png'),
    selectedImage: require('MCImage/tabbar/menuIcon_selected.png'),
  },
  CodeScene: {
    tabBarLabel: '代码',
    normalImage: require('MCImage/tabbar/code.png'),
    selectedImage: require('MCImage/tabbar/code.png'),
  },
};

 // stack 配置
export { default as DisplayScene } from './DisplayScene';
export { default as CodeScene } from './CodeScene';
export { default as ComponentList } from './ComponentList';
