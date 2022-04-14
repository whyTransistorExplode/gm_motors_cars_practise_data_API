import axios from "axios";
import {API_PREFIX} from "@/contants/contants";
import request from "./utils";

// export function saveCarName(malumot) {
//   return axios.post(
//     API_PREFIX + "carName",
//     malumot
//   ).then(res => {
//     return Promise.resolve({
//       success: true,
//       message: "Saqlandi"
//     })
//   })
//     .catch(err => {
//       return Promise.reject({
//         success: false,
//         message: "Saqlashda xatolik"
//       })
//     });
// }
export function saveCarName(malumot) {
    return request({
        url: API_PREFIX + 'carName',
        method: 'pOsT',
        data: malumot
    })
}

// export function getCarNames() {
//   return axios.get(API_PREFIX + 'carName')
//     .then(res => {
//         const {statusText, status, data} = res;
//         return Promise.resolve({
//           success: true,
//           message: statusText,
//           statusCode: status,
//           ...data
//         })
//       }
//     ).catch(error => {
//       const {response, message} = error;
//       return Promise.resolve({
//         success: false,
//         status: response.data.status,
//         message: response.data.message
//       })
//     })
// }
export function getCarNames() {
    return request({
        url: API_PREFIX + 'carName'
    })
}

// export function getCars(data) {
//   // axios.defaults.headers.common['Authorization'] = localStorage.getItem(TOKEN_NAME);
//   return axios.get(`${API_PREFIX}car?page=${data.page}&size=${data.size}`)
//     // return axios.get(`${API_PREFIX}car?page=0&size=0`)
//     .then(res => {
//         const {statusText, status, data} = res;
//         return Promise.resolve({
//           success: true,
//           message: statusText,
//           statusCode: status,
//           ...data
//         })
//       }
//     ).catch(error => {
//       const {response, message} = error;
//       return Promise.resolve({
//         success: false,
//         status: response.status,
//         message: response.data.message,
//       })
//     })
// }
export function getCars(data) {
    console.log(data);
    return request({
        url: 'car',
        data
    });
}

export function saveCarTemplate(data) {
    return axios.post(`${API_PREFIX}carTemplate`, data)
        .then(res => {
                return Promise.resolve(res)
            }
        ).catch(err => {
            return Promise.reject(err)
        })
}

// export function editCarTemplate(data) {
//   return axios.put(`${API_PREFIX}carTemplate/${data.id}`, data)
//     .then(res => {
//         return Promise.resolve(res)
//       }
//     ).catch(err => {
//       return Promise.reject(err)
//     })
// }
export function editCarTemplate(data) {
    return request({
        url: API_PREFIX + 'carTemplate',
        method: 'pUT',
        data
    })
}

export function getPositions() {
    return axios.get(`${API_PREFIX}position`)
        .then(res => {
                return Promise.resolve(res)
            }
        ).catch(err => {
            return Promise.reject(err)
        })
}

export function getDetails() {
    return axios.get(`${API_PREFIX}detail`)
        .then(res => {
                return Promise.resolve(res)
            }
        ).catch(err => {
            return Promise.reject(err)
        })
}

export function getValuesByDetail(data) {
    return axios.get(`${API_PREFIX}value/search/byDetail?id=${data.id}`)
        .then(res => {
                return Promise.resolve(res)
            }
        ).catch(err => {
            return Promise.reject(err)
        })
}

export function savePosition(data) {
    return axios.post(API_PREFIX + 'position', data)
        .then(res => {
            return Promise.resolve(res)
        }).catch(err => {
            return Promise.reject(err)
        })
}

export function getCarTemplates() {
    return axios.get(API_PREFIX + 'carTemplate')
        .then(res => {
            return res;
        }).catch(err => err)
}

export function getCarTemplate(data) {
    return axios.get(API_PREFIX + `carTemplate/${data.id}`)
        .then(res => {
            return res;
        }).catch(err => err)
}

export function getColors() {
    return axios.get(API_PREFIX + 'color')
        .then(res => {
            return res;
        }).catch(err => err)
}

export function uploadFile(data) {
    let obj = new FormData();
    obj.append("file", data.file);
    return axios.post(API_PREFIX + 'attachment/upload', obj)
        .then(res => {
            return res;
        }).catch(err => err)
}

export function saveCar(data) {
    return axios.post(API_PREFIX + 'car', data)
        .then(res => {
            return res;
        }).catch(err => err)
}

export function getPositionsByCarName(data) {
    return axios.get(API_PREFIX + 'position/search/getPositionsByCarName?id=' + data.id)
        .then(res => {
                return res;
            }
        ).catch(err => err)
}


export function getColorsByPosition(data) {
    return axios.get(API_PREFIX + 'color/search/getColorsByCarNameIdAndPositionId?carNameId=' + data.carNameId + '&positionId=' + data.positionId)
        .then(res => res
        ).catch(err => err)
}

export function getCarByColor(data) {
    return axios.get(API_PREFIX + 'car/byColor?carNameId=' + data.carNameId + '&positionId=' + data.positionId + '&colorId=' + data.colorId)
        .then(res => res
        ).catch(err => err)
}

export function checkClient(data) {
    return axios.get(API_PREFIX + 'client/check?passportSerial=' + data.passportSerial + '&passportNumber=' + data.passportNumber + '&personType=' + data.personType)
        .then(res => res)
        .catch(err => err)
}

export function userMe() {
    return request({
        url: 'user/userMe'
    })
}

export function login(data) {
    return request({
        url: 'auth/login',
        method: 'post',
        data
    })
}

