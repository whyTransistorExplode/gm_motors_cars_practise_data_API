import {getCarNames, getCarTemplate, getCarTemplates, getDetails, getPositions, login, userMe} from "@/pages/service";
import {OPEN_PAGES, TOKEN_NAME} from "../contants/contants";
import router from "umi/router";

export default ({
    namespace: 'globalModel',
    state: {
        carTemplates: [],
        showModal: false,
        active: false,
        carNames: [],
        positions: [],
        details: [],
        currentItem: '',
        colors: [],
        carNameId: '',
        positionId: '',
        car: '',
        photoUrl: '',
        price: 0,
        currentUser: ''
    },
    subscriptions: {
        setupHistory({dispatch, history}) {
            history.listen((location) => {
                if (!OPEN_PAGES.includes(location.pathname)) {
                    dispatch({
                        type: 'userMe'
                    })
                }
            })
        }
    },
    effects: {
        * userMe({}, {call, put}) {
            const res = yield call(userMe);
            if (!res.success) {
                localStorage.removeItem(TOKEN_NAME);
                router.push('/auth/login')
            } else {
                yield put({
                    type: 'updateState',
                    payload: {
                        currentUser: res
                    }
                })
            }
        },
        * login({payload}, {call, put}) {
            const res = yield call(login, payload);
            console.log(res);
            if (res.success) {
                localStorage.setItem(TOKEN_NAME, res.tokenType + res.body);
                router.push('/cabinet');
            }
        },
        * getCarNames({}, {call, put}) {
            const res = yield call(getCarNames);
            if (res.status === 200) {
                yield put({
                    type: 'updateState',
                    payload: {
                        carNames: res.data._embedded.list
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
