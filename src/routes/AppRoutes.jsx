import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Main from '../containers/Main'
import Shop from '../containers/Shop'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />

        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;