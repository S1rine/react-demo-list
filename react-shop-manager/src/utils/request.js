import axios from 'axios'
import { getToken } from '@/utils/auth'

const instance = axios.create({
  baseURL: process.env.NODE_ENV === 'development' ? '/api' : '',
  timeout: 5000
})

instance.interceptors.request.use(
  config => {
    config.headers['authorization'] = 'Bearer ' + getToken()
    return config
  },
  err => {
    return Promise.reject(err)
  }
)

instance.interceptors.response.use(
  response => {
    return response.data
  },
  err => {
    return Promise.reject(err)
  }
)

/**
 * get请求
 * @param {*} url 请求地址
 * @param {*} params url参数
 */
export function get(url, params) {
  return instance.get(url, {
    params
  })
}
/**
 * post请求
 * @param {*} url 请求地址
 * @param {*} data 数据
 */
export function post(url, data) {
  return instance.post(url, data)
}
/**
 * put请求
 * @param {*} url 请求地址
 * @param {*} data 数据
 */
export function put(url, data) {
  return instance.put(url, data)
}
/**
 * delete请求
 * @param {*} url 请求地址
 */
export function del(url) {
  return instance.delete(url)
}
