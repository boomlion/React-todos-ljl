import {connect} from 'react-redux'
import {toggleStatus} from '../actions'
import TodoList from "../components/TodoList";
const getVisibleTodos = (todos, visibilityFilter) => {
  switch (visibilityFilter) {
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
    case 'SHOW_ALL':
    default:
      return todos
  }
}
const mapStateToProps = state => {
  return {
    todos: getVisibleTodos(state.todos, state.visibile)
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onClick: id => {dispatch(toggleStatus(id))}
  }
}
const VisibleTodo = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodo