import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import ShoppingCart from './components/ShoppingCart';

const App = () => {
  return (
    <Router>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/cart'>Cart</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<ShoppingCart />} />
      </Routes>
    </Router>
  );
};

export default App;