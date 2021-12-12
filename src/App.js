import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './Component/About';
import Home from './Component/Home';
import NothingFound from './Component/NothingFound';
import SingleRecipe from './Component/SingleRecipe';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe" element={<SingleRecipe />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NothingFound />} />
      </Routes>
    </>
  );
}

export default App;
