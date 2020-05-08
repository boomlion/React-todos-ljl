const todos = (state = [],action) => {
 switch (action.type) {
   case 'ADD_TODO':
     return [
       ...state,
       {
        id: action.id,
        text: action.text,
        completed: false
       }
     ]
    case 'TOGGLE_STATUS':
      return state.map(item => {
        return (item.id === action.id) ?
        {...item,completed:!item.completed} : item
      })
   default:
     return state
 }
}
export default todos