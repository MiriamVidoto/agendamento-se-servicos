import React, { useState }  from 'react'
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { firebase } from '../../services/firebaseConfig';
import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import AuthGoogleContext from './authGoogleContext'


const provider = new GoogleAuthProvider();


export const AuthGoogleProvider = ({ children })  => {
  const auth = getAuth(firebase);
  const [user, setUser] = useState(null)

  useEffect(() => {
    const loadStorage = () => {
      const sessionToken = sessionStorage.getItem("@AuthFirebase:Token")
      const sessionUser = sessionStorage.getItem("@AuthFirebase:user")
      if (sessionToken && sessionUser) {
        setUser(sessionUser)
      }
    }
    loadStorage()
  }, [])

  const signInGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        
        const user = result.user;
        console.log(user);
        setUser(user)
        sessionStorage.setItem("@AuthFirebase:Token", token)
        sessionStorage.setItem("@AuthFirebase:user", JSON.stringify(user))

       
      }).catch((error) => {
        
        const errorCode = error.code;
        const errorMessage = error.message;
       
        const email = error.customData.email;
        
        const credential = GoogleAuthProvider.credentialFromError(error);
        
      });
  }

  const signOut = () => {
    sessionStorage.clear();
    setUser(null);
    return <Navigate to='/' />
  }

  return(
    <AuthGoogleContext.Provider value={{ signInGoogle, signedGoogle: !!user, user, signOut }}>
      { children }
    </AuthGoogleContext.Provider>
  )
}
