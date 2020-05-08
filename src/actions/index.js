let count = 0
export const addList = text => {
  return {
      type: 'ADD_TODO',
      id: count++,
      text
    }
}
export const setVisibletyList = filter => {
  return {
      type: 'SET_VISIBLETY_LIST',
      filter
    }
}
export const toggleStatus = id => {
  return {
      type: 'TOGGLE_STATUS',
      id
    }
}