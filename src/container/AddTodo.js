import React from 'react'
import { connect } from 'react-redux'
import { addList } from '../actions'
import './addtodo.css'
let AddTodo = ({dispatch}) => {
  let input
  return (
    <div className="input">
      <form className='form' onSubmit={
        e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addList(input.value))
          input.value = ''
        }
      }>
        <input className='subinput' ref={node => {input = node}} />
        <button type="submit" className='button'>
          Add Todo
        </button>
      </form>
    </div>
  )
}
AddTodo = connect()(AddTodo)
export default AddTodo