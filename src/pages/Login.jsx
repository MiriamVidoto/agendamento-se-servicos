import React, { useContext, useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import Header from '../components/Header'
import AuthEmailContext from '../contexts/authEmail/authEmailContext'
import AuthGoogleContext from '../contexts/authGoogle/authGoogleContext'
import './Login.css'

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

  const { signInGoogle, signedGoogle   } = useContext(AuthGoogleContext)
  const { signInEmail, auth, signedEmail } = useContext(AuthEmailContext)
  
  

  const logarAuthEmail = async () => {
    await signInEmail(auth, email, password)
  }

  const logarAuthGoogle = async () => {
    await signInGoogle()
  }

  if (!signedGoogle && !signedEmail ){
    return (
      <div>
          <Header />
        <main>
          <section className='container-login'>
            <h2>Entre para realizar seu agendamento</h2>
            <div className='content-login'>
              <input
                type="email"
                name=""
                id="email"
                placeholder='email'
                onChange={ (e) => setEmail(e.target.value) }
              />

              <input
                type="password"
                name=""
                id="password"
                placeholder='senha'
                onChange={ (e) => setPassword(e.target.value) }
              />

              <button 
                type='submit'
                className='btn-entrar'
                onClick={ logarAuthEmail } 
              >Entrar
              </button>
              <h4>Cadastre-se</h4>
              <button 
                type='submit'
                className='btn-auth-google'
                onClick={ logarAuthGoogle } 
              >Ou entre com o Google
              </button>
            </div>
          </section>
        </main>
      </div>
    )
  } else {
      return <Navigate to='/agendamento' />
  }
}

export default Login