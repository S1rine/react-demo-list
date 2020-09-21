import axios from 'axios'
import {
  ADD_FLASH_MESSAGE,
  DELETE_FLASH_MESSAGE,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  USER
} from './actions-type'
// axios.defaults.baseURL = "http://localhost:3030"

export const userSignUpRequest = (params) => {
  return dispatch => {
    // console.log(params)
    return axios.post('/api/users', params)
  }
}

export const isUserExists = (username) => {
  return dispatch => {
    return axios.get(`/api/users/${username}`)
  }
}

export const userLoginRequest = (params) => {
  return dispatch => {
    return axios.post('/api/auth', params)
  }
}

export const userLogoutRequest = () => {
  return dispatch => {
    return axios.post('/api/auth/logout')
  }
}

export const addFlashMessage = (data) => {
  return {
    type: ADD_FLASH_MESSAGE,
    data
  }
}

export const deleteFlashMessage = (data) => {
  return {
    type: DELETE_FLASH_MESSAGE,
    data
  }
}

export const loginSuccess = (data) => {
  sessionStorage.setItem(USER, JSON.stringify(data))
  return {
    type: LOGIN_SUCCESS,
    data
  }
}

export const logoutSuccess = () => {
  sessionStorage.removeItem(USER)
  return {
    type: LOGOUT_SUCCESS
  }
}
