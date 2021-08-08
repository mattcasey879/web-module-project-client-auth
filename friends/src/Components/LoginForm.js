import React, { useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

const initialCredentials = {
  username: "",
  password: "",
};

const LoginForm = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [credentials, setCredentials] = useState(initialCredentials);

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });

  };
  const login = (e) => {
    e.preventDefault();
    axiosWithAuth()
    .post('/api/login', credentials)
    .then(res => {
        localStorage.setItem('token', res.data.token)
        props.history.push('/friends')
    })
    .catch(err => console.log(err))
  }
  return (
    <div className="login-form-container">
      {isLoading ? (
        <h2> Loading ...</h2>
      ) : (
        <form onSubmit={login}>
          <label htmlFor="username">
            <input
              type="text"
              placeholder="username"
              name="username"
              value={credentials.username}
              onChange={handleChange}
            />
          </label>
          <label htmlFor='passwword'>
          <input 
            type='password'
            name='password'
            placeholder='password'
            value={credentials.password}
            onChange={handleChange}
          />
          </label>
          <button>Log in</button>
        </form>
      )}
    </div>
  );
};

export default LoginForm;
