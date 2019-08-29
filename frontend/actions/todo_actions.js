export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";

const receiveTodos = (data) => ({
  type: RECEIVE_TODOS,
  data
})

const receiveTodo = (data) => ({
  type: RECEIVE_TODO,
  data
})

window.receiveTodo = receiveTodo;
window.receiveTodos = receiveTodos
