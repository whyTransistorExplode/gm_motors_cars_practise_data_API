import {getPositions, savePosition} from "@/pages/service";
import {toast} from "react-toastify";

export default ({
  namespace: 'positionModel',
  state: {
    positions: [],
    showModal: false,
    sellActive: false
  },
  subscriptions: {
    // setupHistory({dispatch, history}) {
    //   dispatch({
    //     type: 'getPositions'
    //   })
    // }
  },
  effects: {
    * addPosition({payload}, {call, put}) {
      const res = yield call(savePosition, payload);
      if (res.status === 201) {
        toast.success("Saqlandi");
        yield put({
          type: 'updateState',
          payload: {showModal: false}
        })
      } else {
        toast.success("Xatolik");
      }
    },
    * getPositions({}, {call, put}) {
      const res = yield call(getPositions);
      if (res.status === 200) {
        yield put({
          type: 'updateState',
          payload: {
            positions: res.data._embedded.list
          }
        })
      }

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
