import React, { useEffect } from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import HomePage from './pages/Home';
import Error404 from './pages/Error404';
import Calculator from './pages/Calculator';
import WhatIsASurreal from './pages/WhatIsASurreal';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route path="home" element={<HomePage />} />
          <Route path="calc" element={<Calculator />} />
          <Route path="what-is-a-surreal-number" element={<WhatIsASurreal />} />
          <Route path="insert-relevant" element={null} />
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
