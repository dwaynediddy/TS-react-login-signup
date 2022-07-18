import './App.css';
import { Link } from 'react-router-dom';
import Login from './components/Login';

function App() {
  return (
      <main className="App">
        <Login />
        {/* <Link to="/signup">Sign Up</Link>   
        <Link to="/dashboard">Dashboard</Link>      */}
      </main>
  )
}

export default App;
