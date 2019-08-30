import React from 'react'
import TodoListItem from './todo_list_item';
import TodoForm from'./todo_form'

const List = (props) => {
  return(
  <div> 
    {
        props.todos.map(todo => (<TodoListItem key={todo.id} todo={todo} removeTodo={props.removeTodo} receiveTodo={props.receiveTodo}/>))
    }
      <TodoForm receiveTodo={props.receiveTodo} />
  </div>
)}

export default List