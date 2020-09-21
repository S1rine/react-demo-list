/**
 * action 本质： 对象
 * 
 * @param {*} number
 */
import { ADDACTION, DELACTION, SEARCHACTION } from './actions-type'
import axios from 'axios'

export const searchAction = (data) => ({
  type: SEARCHACTION,
  data
})

export const asyncSearchAction = (payload) => {
  const keyWords = payload
  let users = []
  let isLoading = true
  return async dispatch => {
    dispatch(searchAction({ users, isLoading }))
    const url = `https://api.github.com/search/users?q=${keyWords}`
    const { status, data } = await axios.get(url)
    if (status === 200) {
      users = [...data.items]
      isLoading = false
      dispatch(searchAction({ users, isLoading }))
    }
  }
}

export const addListAction = (data) => ({
  type: ADDACTION,
  data: {
    list: data
  }
})

export const delListAction = (data) => ({
  type: DELACTION,
  data: {
    index: data
  }
})



export const incrementAction = (number) => ({
  type: 'increment',
  data: number
})

export const decrementAction = (number) => ({
  type: 'decrement',
  data: number
})

export const setAction = (number) => ({
  type: 'set',
  data: number
})

export const asyncIncrementAction = (number) => {
  return dispatch => {
    setTimeout(() => {
      dispatch(incrementAction(number))
    }, 2000)
  }
} 
