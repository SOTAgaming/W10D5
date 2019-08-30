export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";

export const receiveTodos = (data) => ({
  type: RECEIVE_TODOS,
  data
})

export const receiveTodo = (data) => ({
  type: RECEIVE_TODO,
  data
})

export const removeTodo = (data) => ({
  type: REMOVE_TODO,
  data
})

// window.receiveTodo = receiveTodo;
// window.receiveTodos = receiveTodos

