import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Reserver from './composants/Reserver';
import ReserverSuite from './composants/ReserverSuite';
import "./App.css";
import Home from './composants/Home';

export default function App() {
  return (
    <>
    <Routes>
      <Route path='reserver' element={<Reserver/>}></Route>
      <Route path='/' element={<Home/>}/>
      <Route path='reserver/suite' element={<ReserverSuite/>}></Route>
    </Routes>
    
    </>
  )
}