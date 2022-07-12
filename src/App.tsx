import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
      <div className="App">
        <div>Welcome to Home</div>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>   
        <Link to="/dashboard">Dashboard</Link>     
      </div>
  )
}

export default App;
