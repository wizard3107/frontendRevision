
import './App.css';
import Counter from './components/Counter/Counter';
import Timer from './components/Timer/Timer';
import Todos from './components/Todo/Todos';

function App() {
  return (
    <div className="App">
        <Counter/>
        <Timer/>
        <Todos/>
    </div>
  );
}

export default App;
