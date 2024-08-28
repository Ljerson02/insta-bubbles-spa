import React from 'react'
import { Route, Routes } from 'react-router'
import { LoginPage, SingUpPage } from '../auth'

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/login" element={ <LoginPage/> } />
      <Route path="/singup" element={ <SingUpPage/> } />
      <Route path="/" element={ <h1>Home</h1> } />
    </Routes>
  )
}
