import styles from '../styles/Navbar.module.css';
import Link from 'next/link';
import { useState } from 'react';
import { Badge, Switch } from '@material-ui/core';
import Cookies from 'js-cookie';



export default function Navbar({ darkMode, dispatch}) {
  const [open, setOpen] = useState(false);
  const darkModeChanger = () => {
    dispatch({ type: darkMode ? 'DARK_MODE_OFF' : 'DARK_MODE_ON' });
    const newDarkMode = !darkMode;
    Cookies.set('darkMode', newDarkMode ? 'ON' : 'OFF');
  };
  return (
    <div className={styles.container}>
      <Link href="/">TopiBooks</Link>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <Link href="/">Home</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/all-books">All Books</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/romance">Romance</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/dystopian">Dystopian</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/classics">Classics</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/motivational">Motivational</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/kids">Children</Link>
        </li>
      </ul>
      <Switch checked={darkMode} onChange={darkModeChanger}></Switch>

      <div className={styles.hamburger} onClick={() => setOpen(!open)}>
        <div className={styles.line} />
        <div className={styles.line} />
        <div className={styles.line} />
      </div>
      <ul
        onClick={() => setOpen(false)}
        className={styles.menu}
        style={{ right: open ? '0px' : '-50vw' }}
      >
        <li className={styles.menuItem}>
          <Link href="/">Home</Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="/all-books">All Books</Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="/romance">Romance</Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="/dystopian">Dystopian</Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="/classics">Classics</Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="/motivational">Motivational</Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="/kids">Children</Link>
        </li>
      </ul>
    </div>
  );
}
