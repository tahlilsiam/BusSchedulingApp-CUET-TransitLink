/* eslint-disable no-unused-vars */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreateBus from './pages/CreateBus';
import ShowBus from './pages/ShowBus';
import EditBus from './pages/EditBus';
import DeleteBus from './pages/DeleteBus';
import FilterData from './pages/FilterData';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/buses/create' element={<CreateBus/>} />
      <Route path='/buses/details/:id' element={<ShowBus/>} />
      <Route path='/buses/edit/:id' element={<EditBus/>} />
      <Route path='/buses/delete/:id' element={<DeleteBus/>} />
      <Route path='/buses/filter' element = {<FilterData/>}/>
    </Routes>
  );
};

export default App;