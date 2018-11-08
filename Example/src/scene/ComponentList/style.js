import EStyleSheet from 'react-native-extended-stylesheet';
import { STYLE_FR_VC_HC } from '@MCRN/css';

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    ...STYLE_FR_VC_HC,
    backgroundColor: '#F5FCFF',
  },
  underlineStyle: {
    backgroundColor: '#0092FD',
    height: 2,
  },
  welcomeText: {
    color: '#999',
    fontSize: 24,
  },
  rowContainer: {
    flex: 1,
    backgroundColor: '#FFF',
    flexDirection: 'column',
    marginVertical: 3,
    padding: 5,
  },
  itemTitle: {
    fontSize: 24,
    fontWeight: '400',
    color: '#333',
  },
  itemDesc: {
    color: '#999',
  },
});

export default styles;

