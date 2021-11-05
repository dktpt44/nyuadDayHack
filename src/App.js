import React from 'react';
import { Route, Routes, Navigate } from 'react-router';
import './App.css';

import Header from './Components/Header';
import AllTasks from './Pages/AllTasks';
import MyTasks from './Pages/MyTasks';
import PostATask from './Pages/PostATask';
import MyWork from './Pages/MyWork';

function App() {
  return (
    <>
    <Header/>

      <Routes >
        <Route path='/' element={<Navigate to="alltasks"/>}/>

        <Route path="alltasks" element={<AllTasks />}/>
          
        <Route path="mytasks" element={<MyTasks />}/>
          
        <Route path="postatask" element={<PostATask />}/>

        <Route path="mywork" element={<MyWork />}/>
          
        <Route path='*' element={<Navigate to="alltasks"/>} />


      </Routes>
    </>
  );
}

export default App;
