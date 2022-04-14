import {getCars, getCarTemplates, getColors, saveCar, uploadFile} from "@/pages/service";

export default ({
  namespace: 'carModel',
  state: {
    cars: [],
    showModal: false,
    active: false,
    page: 0,
    size: 2,
    carTemplates: [],
    colors: [],
    photoId: '',
    totalElements: 0,
    totalPages: 0
  },
  subscriptions: {
    setupHistory({dispatch, history}) {
    }
  },
  effects: {
    * getCars({payload}, {call, put, select}) {
      console.log(payload);
      try {
        if (!payload) {
          let {page, size} = yield select(_ => _.carModel);
          // let size = yield select(_ => _.carModel.size);
          // let page = yield select(_ => _.carModel.page);
          payload = {page, size}
        }
        const res = yield call(getCars, payload);
        if (res.success) {
          yield put({
            type: 'updateState',
            payload: {
              cars: res.object.object,
              page: res.object.page,
              size: res.object.size,
              totalElements: res.object.totalElements,
              totalPages: res.object.totalPages
            }
          })
        }
      } catch (e) {

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
    * getColors({}, {call, put}) {
      let ketmon = yield call(getColors);
      if (ketmon.status === 200) {
        yield put({
          type: 'updateState',
          payload: {
            colors: ketmon.data._embedded.list
          }
        })
      }
    },
    * faylniYuklash({payload}, {call, put}) {
      const res = yield call(uploadFile, payload);
      if (res.status === 200) {
        yield put({
          type: 'updateState',
          payload: {
            photoId: res.data
          }
        })
      }
    },
    * saveCar({payload}, {call, put}) {
      const res = yield call(saveCar, payload);
      if (res.status === 201) {
        yield put({
          type: 'updateState',
          payload: {
            photoId: res.data
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
