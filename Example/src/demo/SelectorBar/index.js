import React, {
  Component,
} from 'react';
import All from 'mcrn-ui/All';
import SelectorBar from 'mcrn-ui/SelectorBar';


class Page extends Component {
  static section = 'Data Entry';

  onPress() {
    // console.log('onPress!');
  }
  render() {
    return (
      <All>
        <SelectorBar
          onConfirm={(data) => alert(JSON.stringify(data))} //eslint-disable-line
          options={[{
            title: '售卖状态',
            optionsData: [
              { name: '全部', value: -1, selected: true },
              { name: '售卖中', value: 0 },
              { name: '停止售卖', value: 1 },
              { name: '停止售卖2', value: 2 },
              { name: '停止售卖3', value: 3 },
              { name: '停止售卖4', value: 4 },
              { name: '停止售卖5', value: 5 },
            ],
            multi: true,
          },
          {
            title: '库存状态',
            optionsData: [
              { name: '全部', value: -1, selected: true },
              { name: '单品库存告急', value: 0 },
              { name: '单品售罄', value: 1 },
            ],
            multi: false,
          }]}
        />
      </All>
    );
  }
}

export default Page;
