import { RECEIVE_TODOS, RECEIVE_TODO} from '../actions/todo_actions';


 export const todoReducer = (state = {}, action) => {
  let newState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_TODOS:
      newState = {}
      action.data.forEach(todo => {
        newState[todo.id] = todo 
      });
      return newState
    case RECEIVE_TODO:
      newState[action.data.id] = action.data;
      return newState
    default:
      return state
  }
}

