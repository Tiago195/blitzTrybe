import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import style from './Home.module.css';

const url = 'http://localhost:3001';
export default function Home() {
  const [login, setLogin] = useState({
    loginEmail: '',
    loginPassword: '',
  });
  const [sign, setSign] = useState({
    signName: '',
    signEmail: '',
    signPassword: '',
    signGithub: '',
    isAdmin: false,
  });
  const navigate = useNavigate();

  const handleLogin = ({ target }) => {
    setLogin((old) => ({ ...old, [target.name]: target.value }));
  };

  const submitLogin = async () => {
    try {
      const { data } = await axios.post(`${url}/user/login`, {
        email: login.loginEmail,
        password: login.loginPassword,
      });

      // eslint-disable-next-line no-undef
      localStorage.setItem('token', data.token);

      if (data.user.is_admin) {
        return navigate('/dashboard/admin');
      }
      return navigate('/dashboard');
    } catch (error) {
      return toast.error(error.response.data.message);
    }
  };

  const handleSign = ({ target }) => {
    const value = target.type === 'checkbox' ? 'checked' : 'value';
    setSign((old) => ({ ...old, [target.name]: target[value] }));
  };

  const submitSign = async () => {
    try {
      const { data } = await axios.post(`${url}/user`, {
        name: sign.signName,
        email: sign.signEmail,
        password: sign.signPassword,
        is_admin: sign.isAdmin,
      });
      return toast.success(data.message);
    } catch (error) {
      return toast.error(error.response.data.message);
    }
  };

  return (
    <section className={style.homeContainer}>
      <section className={style.containers}>
        <h2>Login</h2>
        <label htmlFor="login-email" className={style.label}>
          <span>Email</span>
          <input
            type="text"
            id="login-email"
            name="loginEmail"
            onChange={handleLogin}
          />
        </label>
        <label htmlFor="login-password" className={style.label}>
          <span>Password</span>
          <input
            type="password"
            id="login-password"
            name="loginPassword"
            onChange={handleLogin}
          />
        </label>
        <button type="button" onClick={submitLogin}>login</button>
      </section>
      <section className={style.containers}>
        <h2>Sign in</h2>
        <label htmlFor="sign-name" className={style.label}>
          <span>name</span>
          <input
            type="text"
            id="sign-name"
            name="signName"
            onChange={handleSign}
          />
        </label>
        <label htmlFor="sign-github" className={style.label}>
          <span>nick do github</span>
          <input
            type="text"
            id="sign-github"
            name="signGithub"
            onChange={handleSign}
          />
        </label>
        <label htmlFor="sign-email" className={style.label}>
          <span>Email</span>
          <input
            type="text"
            id="sign-email"
            name="signEmail"
            onChange={handleSign}
          />
        </label>
        <label htmlFor="sign-password" className={style.label}>
          <span>Password</span>
          <input
            type="password"
            id="sign-password"
            name="signPassword"
            onChange={handleSign}
          />
        </label>
        <label htmlFor="sign-admin" className={style.admin}>
          <span>Admin</span>
          <input
            type="checkbox"
            id="sign-admin"
            name="isAdmin"
            onChange={handleSign}
          />
        </label>
        <button type="button" onClick={submitSign}>sign in</button>
      </section>
    </section>
  );
}
