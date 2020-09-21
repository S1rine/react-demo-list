import { post } from '@/utils/request'

/**
 * 用户登录
 * @param {*} user 用户信息
 * username
 * password
 */
export function loginApi(user) {
  return post('/v1/auth/manager_login', user)
}
