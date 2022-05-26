import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import List from '../pages/List';
import Register from '../pages/Register';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Routes>
        <Route path='/list' element={<List />} />
      </Routes>
      <Routes>
        <Route path='/register' element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}
