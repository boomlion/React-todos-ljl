const visibile = (state = 'SHOW_ALL',action) => {
  switch (action.type) {
    case 'SET_VISIBLETY_LIST':
      return action.filter
    default:
      return state
  }
 }
 export default visibile