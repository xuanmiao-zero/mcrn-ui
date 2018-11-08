import {
  StyleSheet,
} from 'react-native';
import {
  COLOR_BG_DARK,
} from '../constant';

const SIDE_GAP = 10;
const COLOR = '#fff';

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: COLOR_BG_DARK,
    position: 'relative',
  },
  header: {
    paddingHorizontal: SIDE_GAP,
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-between',
    position: 'relative',
    backgroundColor: 'transparent',
  },
  titleWrapper: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    flexDirection: 'column',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    color: COLOR,
  },
  btn: {
    justifyContent: 'center',
    flex: 1,
  },
  btnText: {
    color: COLOR,
  },
});

export default styles;
