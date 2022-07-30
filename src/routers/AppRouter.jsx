import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Home from '../pages/home/Home';
import UnitDetail from '../pages/unitDetail/UnitDetail';
import Unit from '../pages/unit/Unit';
import NotFound from '../pages/notFound/NotFound';

function AppRouter() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/units" element={<Unit />} />
        <Route path="/unit-detail/:id" element={<UnitDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
