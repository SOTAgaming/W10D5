import { connect } from 'react-redux';
import List from './todos_list';
import { receiveTodo, receiveTodos, RECEIVE_TODOS, RECEIVE_TODO } from '../../actions/todo_actions'
import allTodos from '../../reducers/selectors'


const mapStateToProps = (state) => { 
  return {
    todos: allTodos(state)
  };
};


const mapDispatchToProps = dispatch => {
  return {
    receiveTodo: todo =>  dispatch(receiveTodo(todo)) 
}}


export default connect(mapStateToProps, mapDispatchToProps)(List)
