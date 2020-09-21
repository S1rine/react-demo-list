import { get, post, put, del } from '@/utils/request'

/**
 * 获取列表
 * @param {*} page 页码
 */
export function listApi(page = 1, defaultPageSize) {
  return get('/v1/admin/products', { page, per: defaultPageSize })
}

/**
 * 创建商品数据
 * @param {*} data
 */
export function createApi(data) {
  return post('/v1/admin/products', data)
}

/**
 * 根据ID获取数据
 * @param {*} id
 */
export function getOneById(id) {
  return get(`/v1/admin/products/${id}`)
}

/**
 * 修改商品数据
 * @param {*} id
 * @param {*} data
 */
export function modifyOne(id, data) {
  return put(`/v1/admin/products/${id}`, data)
}

/**
 * 删除记录
 * @param {*} id
 */
export function delOne(id) {
  return del(`/v1/admin/products/${id}`)
}
