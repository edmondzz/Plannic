import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Home, Services, AboutUs, Contact, References } from '../pages';

function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/services' element={<Services />} />
      <Route path='/about-us' element={<AboutUs />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/references' element={<References />} />
    </Routes>
  );
}

export default AppRoutes;
