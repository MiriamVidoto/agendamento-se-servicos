import React, { Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../pages/Login'
import Scheduling from '../pages/Scheduling'
import PrivateRoutes from './PrivateRoutes'

function AppRoutes() {
  return (
      <Fragment>
        <Routes>
          <Route path='/' element={ <Login /> } />
          <Route path='/agendamento' element={ <PrivateRoutes /> } >
            <Route path='/agendamento' element={ <Scheduling /> } />
            </Route>
        </Routes>
      </Fragment>
  )
}

export default AppRoutes