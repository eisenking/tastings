import { useState } from 'react'
import { Routes, Route, Outlet, Link, useParams } from "react-router-dom";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import NavbarBs from './components/Navbar'
import Recipe from './components/Recipe'
import { tastings } from './data/data.js'
import { Tastings } from './pages/Tastings';
import Login from './pages/Login';

function App() {

  return (
    <>
      <NavbarBs />
      <Container>
        <Routes>
          {/* <Route path="/" element={<Login />} /> */}
          <Route path="/" element={<Tastings />} />
          {tastings.map((recipe) => (
            <Route
              key={recipe.id}
              path={`/${recipe.id}`}
              element={<Recipe recipe={recipe} />}
            />
          ))}
        </Routes>
      </Container>
    </>
  )
}

export default App