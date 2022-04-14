export default ({
  namespace: 'clientModel',
  state: {
    birthDate: new Date()
  },
  subscriptions: {},
  effects: {},
  reducers: {
    updateState(state, {payload}) {
      return {
        ...state,
        ...payload
      }
    }
  }
});
