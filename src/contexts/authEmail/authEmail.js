import React, { useEffect, useState }  from 'react'
import AuthEmailContext from './authEmailContext'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const AuthEmailProvider = ({ children })  => {
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
  
  const auth = getAuth();
  const signInEmail = (auth, email, password) => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
       setUser(user)
        sessionStorage.setItem("@AuthFirebase:Token", user.accessToken)
        sessionStorage.setItem("@AuthFirebase:user", JSON.stringify(user))
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  }

  return(
    <AuthEmailContext.Provider value={{ auth, signInEmail, signedEmail: !!user }}>
      { children }
    </AuthEmailContext.Provider>
  )
}
