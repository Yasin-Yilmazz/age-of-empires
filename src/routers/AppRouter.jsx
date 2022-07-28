import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Home from '../pages/home/Home';
import UnitDetail from '../pages/unitDetail/UnitDetail';
import Unit from '../pages/unit/Unit';

function AppRouter() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/units" element={<Unit />} />
        <Route path="/unit-detail" element={<UnitDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
