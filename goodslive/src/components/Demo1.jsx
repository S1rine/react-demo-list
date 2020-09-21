import React, { useState, useEffect } from 'react'

const todoList = []

const useInputValue = (initialValue) => {
  const [value, setValue] = useState(initialValue)
  return {
    value,
    setValue,
    onChange: e => setValue(e.target.value)
  }
}

export default () => {
  const [list, setList] = useState(todoList)
  const text = useInputValue('')
  useEffect(() => {
  })
  return (
    <>
      <input type="text" {...text} />
      <button onClick={() => { setList([...list, text.value]); text.setValue('') }}>add</button>
      <ul>
        {
          list.map((item, index) => {
            return (
              <li key={index}>{item}</li>
            )
          })
        }
      </ul>
      <button onClick={() => { setList([]) }}>clear</button>
    </>
  )
}
