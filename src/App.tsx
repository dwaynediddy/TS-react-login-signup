import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
      <main className="App">
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>   
      </main>
  )
}

export default App;
