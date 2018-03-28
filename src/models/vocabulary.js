import _ from 'lodash';
export default {

  namespace: 'example',

  state: {
    list: [{
        name: '買醬油',
      },
      {
        name: '背單字',
      },
      {
        name: '打咚咚',
      },
    ],
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
  },

  reducers: {
    add(state, { item }) {
      return {
        ...state,
        list: _.concat(state.list, [item]),
      };
    },
    delete(state, { index }) {
      return {
        ...state,
        list: _.filter(state.list, (item, i) => !_.isEqual(index, i)),
      };
    },
  },

};