import React, {
  Component,
} from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import All from 'mcrn-ui/All';
import TabBar from 'mcrn-ui/TabBar';

import TabBarItem from './TabBarItem';

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBar: {
    height: 40,
  },
});

const TabBarItems = [{
  id: 'rocket',
  defaultComponent: <TabBarItem key="1" iconName="rocket" title="rocket" />,
  activedComponent: <TabBarItem key="2" iconName="rocket" title="rocket" color="red" />,
}, {
  id: 'plug',
  defaultComponent: <TabBarItem key="1" iconName="plug" title="plug" />,
  activedComponent: <TabBarItem key="2" iconName="plug" title="plug" color="red" />,
}, {
  id: 'bolt',
  defaultComponent: <TabBarItem key="1" iconName="bolt" title="bolt" />,
  activedComponent: <TabBarItem key="2" iconName="bolt" title="bolt" color="red" />,
}, {
  id: 'bomb',
  defaultComponent: <TabBarItem key="1" iconName="bomb" title="bomb" />,
  activedComponent: <TabBarItem key="2" iconName="bomb" title="bomb" color="red" />,
}];

class Page extends Component {
  static section = 'Navigation';

  constructor(props) {
    super(props);
    this.state = {
      paneId: 'rocket',
    };
    this.onTabBarPress = this.onTabBarPress.bind(this);
  }

  onTabBarPress(paneId) {
    this.setState({
      paneId,
    });
  }

  render() {
    return (
      <All>
        <View style={styles.body}>
          <Text>
            {this.state.paneId}
          </Text>
        </View>
        <TabBar
          activeId={this.state.paneId}
          items={TabBarItems}
          onPress={this.onTabBarPress}
          style={styles.tabBar}
        />
      </All>
    );
  }
}


export default Page;
