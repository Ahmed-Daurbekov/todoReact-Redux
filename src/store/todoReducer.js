export function todoReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [action.card, ...state]
    case 'DONE_TODO':
      return [...state.slice(0, state.indexOf(action.card)), action.card, ...state.slice(state.indexOf(action.card)+1)]
    case 'REMOVE_TODO':
      return state.filter(item => item.id != action.card)
    case 'COMPLETE_TODO':
      return [...state.slice(0, state.indexOf(action.card[0])), action.card[1], ...state.slice(state.indexOf(action.card[0])+1)]
    case 'GET_TODOS':
      return action.card
    default:
      return state
  }
}