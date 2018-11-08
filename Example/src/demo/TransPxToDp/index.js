import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
} from 'react-native';
import {
  Article,
} from 'MCComponent';
import All from 'mcrn-ui/All';
import transPxToDp from 'mcrn-ui/util/transPxToDp';

const styles = StyleSheet.create({
  scrollView: {
    paddingHorizontal: 10,
  },
  view1: {
    borderBottomWidth: 1,
  },
  view2: {
    borderBottomWidth: transPxToDp(1),
  },
});

function Page() {
  return (
    <All>
      <ScrollView style={styles.scrollView}>
        <Article title="1 dp 的边框">
          <View style={styles.view1} />
        </Article>
        <Article title="1 px 的边框">
          <View style={styles.view2} />
        </Article>
      </ScrollView>
    </All>
  );
}


export default Page;
