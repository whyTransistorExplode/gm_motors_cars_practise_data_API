import {checkClient, getCarByColor, getColorsByPosition, getPositionsByCarName} from "../service";

export default ({
  namespace: 'contractModel',
  state: {
    isNext: false,
    currentClient: '',
    passportSerial: '',
    passportNumber: '',
    personType: '0',
    keraksiz: '0',
    checked: false

  },
  subscriptions: {},
  effects: {
    * getPositionsByCarName({payload}, {call, put}) {
      const res = yield call(getPositionsByCarName, payload);
      yield put({
        type: 'globalModel/updateState',
        payload: {
          positions: res.data._embedded.list,
          carNameId: payload.id
        }
      })
    },
    * getColorByPosition({payload}, {call, put, select}) {
      let {carNameId} = yield select(_ => _.globalModel);
      payload.carNameId = carNameId;
      const res = yield call(getColorsByPosition, payload);
      yield put({
        type: 'globalModel/updateState',
        payload: {
          colors: res.data._embedded.list,
          positionId: payload.positionId
        }
      })
    },
    * getCarByColor({payload}, {call, put, select}) {
      const {positionId, carNameId} = yield select(_ => _.globalModel);
      payload.positionId = positionId;
      payload.carNameId = carNameId;
      const res = yield call(getCarByColor, payload);
      yield put({
        type: 'globalModel/updateState',
        payload: {
          car: res.data,
          photoUrl: res.data.photoUrl,
          price: res.data.price,
        }
      })
    },
    * checkClient({payload}, {call, put, select}) {
      const res = yield call(checkClient, payload);
      yield put({
        type: 'updateState',
        payload: {
          currentClient: res.data.id ? res.data : '',
          checked: true
        }
      })
    }
  },
  reducers: {
    updateState(state, {payload}) {
      return {
        ...state,
        ...payload
      }
    }
  }
});
