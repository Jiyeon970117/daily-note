import React, { useEffect } from 'react';
import styles from './daily.module.css'
import Header from '../header/header';
import { useNavigate } from 'react-router-dom';
const Daily = ({authService}) => {
  const navigate = useNavigate();
  const onLogout = () => {
    authService.logout();
  }
  
  useEffect(() => {
    authService.onAuthChange( user => {
      if(!user){
        navigate('/')
      }
    })
  })
  return(
    <section className={styles.daily}>
      <Header onLogout={onLogout} />
        <ul className={styles.list}>
          <li className={styles.item}>
            <button className={styles.button}>Daily</button>
          </li>
          <li className={styles.item}>
            <button className={styles.button}>TodoList</button>
          </li>
        </ul>
    </section>
  )
};

export default Daily;