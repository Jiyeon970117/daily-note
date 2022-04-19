import React from 'react';
import styles from './header.module.css'
const Header = ({onLogout}) => (
  <header>
    {
      true && (<button className={styles.logout} onClick={onLogout}>Logout</button>)
    }
    <h2 className={styles.title}> Daily Note </h2> 
  </header>
  );

export default Header;