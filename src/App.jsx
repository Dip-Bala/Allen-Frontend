import React from 'react'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout'
function App() {
  return <BrowserRouter>
    <Routes>
        <Route path="/" element={<Layout />}/>
    </Routes>
  </BrowserRouter>
}

export default App