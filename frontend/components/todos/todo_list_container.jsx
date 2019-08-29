import { connect } from 'react-redux';
import List from './todos_list';
import { receiveTodo, receiveTodos } from '../../actions/todo_actions'
import allTodos from '../../reducers/selectors'


const mapStateToProps = (state) => { 
  return {
    todos: allTodos(state)
  };
};


const mapDispatchToProps = (dispatch) => ({
  receiveTodo: (todo) => dispatch(receiveTodo(todo))
})


export default connect(mapStateToProps, mapDispatchToProps)(List)
