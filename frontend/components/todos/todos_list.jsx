import React from 'react'
import TodoListItem from './todo_list_item';

const List = (props) => {
  return(
  <div> 
    {
     props.todos.map(todo => (<TodoListItem key={todo.id} todo={todo} />))
    }

  </div>
)}

export default List