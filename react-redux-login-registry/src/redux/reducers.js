import { combineReducers } from 'redux'
import {
  ADD_FLASH_MESSAGE,
  DELETE_FLASH_MESSAGE,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS
} from './actions-type'
import shortid from 'shortid'

const initUser = JSON.parse(sessionStorage.getItem('user')) || {}

function auth (state = initUser, { type, data }) {
  switch (type) {
    case LOGIN_SUCCESS:
      return data
    case LOGOUT_SUCCESS:
      return {}
    default:
      return state
  }
}

function flashMessages (state = [], { type, data }) {
  switch (type) {
    case ADD_FLASH_MESSAGE:
      return [
        ...state,
        {
          id: shortid.generate(),
          type: data.type,
          text: data.text
        }
      ]
    case DELETE_FLASH_MESSAGE:
      const list = [...state]
      const index = list.findIndex(v => v.id === data)
      if (index !== -1) {
        list.splice(index, 1)
      }
      return list
    default:
      return state
  }
}


const Reducer = combineReducers({
  auth,
  flashMessages
})

export default Reducer