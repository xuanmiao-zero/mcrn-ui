import { handleActions } from 'redux-actions';

const Demo = handleActions({
  SHOW_LOADING: () => ({
    visible: true,
  }),
  HIDE_LOADING: () => ({
    visible: false,
  }),
}, {
  visible: false,
});

export default Demo;
