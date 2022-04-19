import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './login.module.css'
const Login = ({authService}) => {
  const navigate = useNavigate();

  const gotoDaily = (userId) => {
    navigate('/daily',{state:{id: userId}});
  }

  const onLogin = (e) => {
    authService
    .login(e.currentTarget.textContent)
    .then(data => gotoDaily(data.user.uid))
  }

  useEffect(() => {
    authService
    .onAuthChange(user => {
      user && gotoDaily(user.uid)
    })
  })
  return(
    <section className={styles.login}>
      <h1 className={styles.title}>Sing In</h1>
      <div>
        <ul className={styles.list}>
          <li className={styles.item}>
            <button className={styles.button} onClick={onLogin}>
                Google
            </button>
          </li>
          <li className={styles.item}>
            <button className={styles.button} onClick={onLogin}>
                Github
            </button>
          </li>
        </ul>
      </div>
    </section>
  )
};

export default Login;