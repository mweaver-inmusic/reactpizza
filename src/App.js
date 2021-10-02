import './App.css';
import Environment from './components/environment.component';
import ListPizza from './components/ListPizza.component';
import AddPizza from './components/AddPizza.component';

function App() {
  return (
    <div>
      <Environment />
      <AddPizza />
      <ListPizza />
    </div>
  );
}

export default App;
