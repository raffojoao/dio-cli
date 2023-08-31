import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/home';
import Feed from './pages/feed';
import Login from './pages/login';
import Register from './pages/register';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/feed' element={<Feed />} />
      </Routes>
    </Router>
  );
}

export default App;
