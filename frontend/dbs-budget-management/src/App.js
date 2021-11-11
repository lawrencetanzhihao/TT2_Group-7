
import './App.css';
import Alert from './components/Alert';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';

function App() {
  return (
    <div className="App">
      <ExpenseForm />
      <ExpenseList />
      <Alert />
    </div>
  );
}

export default App;
