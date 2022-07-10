
import React from 'react';
import HomeScreen from './Screens/HomeScreen';
import ViewScreen from './Screens/ViewScreen';
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen/>}/>
        <Route path="Id" element={<ViewScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


