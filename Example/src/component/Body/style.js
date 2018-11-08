
import { StyleSheet } from 'react-native';
import { bottomHeight } from '@MCRN/css';

export default StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  homeIndicator: {
    height: bottomHeight,
  },
  children: {
    position: 'relative',
    flex: 1,
  },
  border: {
    borderWidth: 1,
    borderColor: '#DDD',
  },
});
