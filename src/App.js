import './App.css';
import { useSelector } from 'react-redux';
import Navbar from './components/Navbar';
import TodosForm from './components/TodosForm';
import AllRoutes from './routes/AllRoutes';

function App() {
  const todos = useSelector((state) => state.todos)
  console.log(todos)
  return (
    <div className="App">
      <Navbar />
    <AllRoutes/>
    </div>
  );
}

export default App;
