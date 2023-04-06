import './styles/reset.css';
import './styles/App.css';
import Counter from './components/counter/Counter';

function App() {
  return (
    <div className="container">
      <h1>Let useReducer</h1>
      <Counter />
    </div>
  );
}
export default App;
