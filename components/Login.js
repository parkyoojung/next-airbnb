import React from 'react'
import { FaGithub, FcGoogle } from "react-icons/fa";

function Login({authService}) {
  const onLogin = event => {
    authService
      .login(event.currentTarget.textContent)
  };

  return (
        <section>
          <h1>Welcome to Airbnb</h1>
          <ul>
            <li >
              <button onClick={onLogin}><FcGoogle />Continue with Google</button>
            </li>
            <li >
              <button onClick={onLogin}><FaGithub />Continue with Github</button>
            </li>
          </ul>
        </section>
    ); 
  }
export default Login;