import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import AuthEmailContext from '../contexts/authEmail/authEmailContext'
import AuthGoogleContext from '../contexts/authGoogle/authGoogleContext'

function PrivateRoutes() {
  const { signedGoogle } = useContext(AuthGoogleContext)
  const { signedEmail } = useContext(AuthEmailContext)
  return signedGoogle || signedEmail === true ? <Outlet /> : <Navigate to='/' />;
}

export default PrivateRoutes