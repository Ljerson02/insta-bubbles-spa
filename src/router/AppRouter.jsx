import React from 'react'
import { Navigate, Route, Routes } from 'react-router'
import { LoginPage, SingUpPage } from '../auth'
import { useSelector } from 'react-redux'
import { InstaBubblesDashBoardPage } from '../dashboard/pages/InstaBubblesDashBoardPage'

export const AppRouter = () => {
  const { isLogged } = useSelector(state => state.auth);

  return (
    <Routes>
      {
        !isLogged ?
        (
          <>
            <Route path="/login" element={ <LoginPage/> } />
            <Route path="/singup" element={ <SingUpPage/> } />
            <Route path="/*" element={ <Navigate to="/singup" /> } />
          </>
        ):
        (
          <>
            <Route path="/*" element={ <Navigate to="/" /> } />
            <Route path="/" element={ <InstaBubblesDashBoardPage/> } />
          </>
        )
      }
      
    </Routes>
  )
}
