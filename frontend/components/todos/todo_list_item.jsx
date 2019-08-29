import React from 'react';

const TodoListItem = ({todo}) => (
  <ul>
    <li>{todo.title}</li>
    <li>{todo.body}</li>
  </ul>
  
)

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