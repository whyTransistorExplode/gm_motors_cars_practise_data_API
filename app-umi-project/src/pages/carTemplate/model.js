import {
  editCarTemplate,
  getCarNames,
  getCarTemplate,
  getCarTemplates,
  getDetails,
  getPositions,
  getValuesByDetail,
  saveCarTemplate
} from "@/pages/service";
import {toast} from "react-toastify";
import router from "umi/src/router";


export default ({
  namespace: 'carTemplateModel',
  state: {
    carTemplates: [],
    showModal: false,
    active: false,
    carNames: [],
    positions: [],
    details: [],
    arr: [{id: 1, values: []}],
    currentItem: ''
  },
  subscriptions: {
    setupHistory({dispatch, history}) {
      dispatch({
        type: 'getCarNames'
      });
      dispatch({
        type: 'getPositions'
      });
      dispatch({
        type: 'getDetails'
      });
    }
  },
  effects: {
    * saveCarTemplate({payload}, {call, put, select}) {
      const res = yield call(saveCarTemplate, payload);
      if (res.status === 201) {
        router.push("/carTemplate");
        toast.success(res.message);

      }
    },
    * getCarNames({}, {call, put}) {
      const res = yield call(getCarNames);
      if (res.success) {
        yield put({
          type: 'updateState',
          payload: {
            carNames: res._embedded.list
          }
        })
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
    },
    * getDetails({}, {call, put}) {
      const res = yield call(getDetails);
      if (res.status === 200) {
        yield put({
          type: 'updateState',
          payload: {
            details: res.data._embedded.list
          }
        })
      }
    },
    * getValuesByDetail({payload}, {call, put, select}) {
      const res = yield call(getValuesByDetail, payload);
      let {arr} = yield select(_ => _.carTemplateModel);
      if (res.status === 200) {
        arr[payload.i].values = res.data._embedded.list;
        yield put({
          type: 'updateState',
          payload: {
            arr
          }
        })
      }
    },
    * getCarTemplates({}, {call, put}) {
      let ketmon = yield call(getCarTemplates);
      if (ketmon.status === 200) {
        yield put({
          type: 'updateState',
          payload: {
            carTemplates: ketmon.data
          }
        })
      }
    },
    * editCarTemplate({payload}, {call, put}) {
      const res = yield call(editCarTemplate, payload);
      if (res.success) {
        alert("Tahrirlandi")
        router.push("/carTemplate")

      } else {
        alert("Xatolik")
      }
    },
    * getCarTemplate({payload}, {call, put}) {
      const res = yield call(getCarTemplate, payload);
      const aa = require("uuid/v4");
      let newArr = res.data.values.map(item => {
        return {id: aa(), values: item.values, valueId: item.selectedValueId}
      });
      yield put({
        type: 'updateState',
        payload: {
          arr: newArr,
          currentItem: res.data
        }
      });
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
