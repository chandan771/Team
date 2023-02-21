import logo from './logo.svg';
// import React, { useEffect, useState } from "react";
import './App.css';
import Header from './components/head/Header';
import Employees from './components/head/Employees';
import Footer from './components/head/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GroupedTeamMembers from './components/head/GroupedTeamMembers';
import Nav from './components/head/Nav';
import NotFound from './components/head/NotFound';
import { DataProvider } from './components/head/DataContext';

function App() {
  return (


    <DataProvider>

      <Router>

        <Nav />

        <Header />

        <Routes>

          <Route path='/' element={<Employees />}>

          </Route>

          <Route path='/GroupedTeamMembers' element={<GroupedTeamMembers />}>

          </Route>

          <Route path='*' element={<NotFound />}></Route>
          
        </Routes>

        <Footer />

      </Router>

    </DataProvider>


  );
}

export default App;
