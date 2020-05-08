import {combineReducers} from 'redux'
import todos from "./todos";
import visibile from './visibile'
const todoApp = combineReducers({
  visibile,
  todos
})
export default todoApp