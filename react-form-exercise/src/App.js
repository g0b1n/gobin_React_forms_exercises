import './App.css'
import BoxList from './BoxList/BoxList';
import TodoList from './TodoApp/TodoList';

function App() {
  return (
    <div className="App">
      <h3 className='part-one'>Part 1 : Color Box Maker</h3>
      <BoxList />
      <hr></hr>
      <h3 className='part-two'>Part 2 : Todo App</h3>
      <TodoList />
    </div>
  );
}

export default App;
