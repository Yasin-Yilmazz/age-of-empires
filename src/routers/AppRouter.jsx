import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/home/Home';
import Unit from '../pages/unit/Unit';

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/units" element={<Unit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
