import {getCarNames, saveCarName} from "@/pages/service";
import {toast} from "react-toastify";


export default ({
  namespace: 'carNameModel',
  state: {
    carNames: [],
    showModal: false,
    sellActive: false
  },
  subscriptions: {},
  effects: {
    * addCarName({payload}, {call, put, select}) {
      const res = yield call(saveCarName, payload);
      if (res.success) {
        yield put({
          type: 'stateniUzgartirish',
          payload: {
            showModal: false
          }
        });
        yield put({
          type: 'getCarNames'
        });
        toast.success(res.message);
      } else {
        toast.error(res.message);
      }
    },
    * getCarNames({}, {call, put}) {
      const res = yield call(getCarNames);
      if (res.success) {
        yield put({
          type: 'stateniUzgartirish',
          payload: {
            carNames: res._embedded.list
          }
        })
      }
    }
  },
  reducers: {
    stateniUzgartirish(state, {payload}) {
      return {
        ...state,
        ...payload
      }
    }
  }
});
