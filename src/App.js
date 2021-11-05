import React from 'react';
import { Route, Routes, Navigate } from 'react-router';

import './App.css';
import { Button } from 'reactstrap';

import Header from './Components/Header';
import AllTasks from './Pages/AllTasks';
import MyTasks from './Pages/MyTasks';
import PostATask from './Pages/PostATask';

function App() {
  return (
    <>
    <Header/>

      <Routes >
        <Route path='/' element={<Navigate to="alltasks"/>}/>

        <Route path="alltasks" element={<AllTasks />}/>
          
        <Route path="mytasks" element={<MyTasks />}/>
          
        <Route path="postatask" element={<PostATask />}/>
          
        <Route path='*' element={<AllTasks/>} />

      </Routes>
    </>
  );
}

export default App;
