import React from 'react';

const TodoListItem = ({todo, removeTodo}) => {
  
  return (
  <ul>
    <li>{todo.title}</li>
    <li>{todo.body}</li>
      <button onClick={() => removeTodo(todo)}>Delete</button>
  </ul>
  )
}

// class TodoListItem extends React.Component {
//   constructor(props) {
//     super(props)
//   }

//   render() {
//     return (
//       <h1>test</h1>
//     )
//   }
// }

export default TodoListItem