import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
} from 'react-native';
import {
  Icon,
  Article,
} from 'MCComponent';
import All from 'mcrn-ui/All';
import Badge from 'mcrn-ui/Badge';

const styles = StyleSheet.create({
  icon: {
    fontSize: 20,
  },
  scrollView: {
    paddingHorizontal: 10,
  },
  container: {
    flexDirection: 'row',
  },
  textContainerStyle: {
    top: null,
    bottom: 0,
  },
});

function Page() {
  return (
    <All>
      <ScrollView style={styles.scrollView}>

        <Article title="文字 + 角标">
          <View style={styles.container}>
            <Badge text="+1s">
              <Text>
                一颗赛艇
              </Text>
            </Badge>
          </View>
        </Article>

        <Article title="图标 + 角标">
          <View style={styles.container}>
            <Badge text={8}>
              <Icon name="commenting-o" style={styles.icon} />
            </Badge>
          </View>
        </Article>

        <Article title="dot 单独使用">
          <View style={styles.container}>
            <Badge dot>
              <Text>dot</Text>
            </Badge>
          </View>
        </Article>

        <Article title="位置右居中">
          <View style={styles.container}>
            <Badge text="位置根据计算居中">
              <Text>位置右居中</Text>
            </Badge>
          </View>
        </Article>

        <Article title="自定义位置">
          <View style={styles.container}>
            <Badge text="8" textContainerStyle={styles.textContainerStyle}>
              <Icon name="commenting-o" style={styles.icon} />
            </Badge>
          </View>
        </Article>
      </ScrollView>
    </All>
  );
}

Page.section = 'Data Display';


export default Page;
