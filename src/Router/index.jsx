import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, List, Register } from '../pages';

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
