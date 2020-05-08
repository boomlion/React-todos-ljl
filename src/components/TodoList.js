import React from "react";
import PropTypes from 'prop-types'
import Todo from './Todo'
import './todolist.css'
const TodoList = ({todos, onClick}) => {
  return (
    <ul className='ullist'>
      {
        todos.map(item => (
          <Todo key={item.id} {...item} onClick={()=> onClick(item.id)} />
        ))
      }
    </ul>
  )
}
TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onClick: PropTypes.func.isRequired
}
export default TodoList;