import styles from '../styles/Intro.module.css';
import Circle from './Circle';
import Intropic from './Intropic';
import { useState } from 'react';
import data from '../utils/data';


export default function Intro() {
  
  const [searchData, setSearchData] = useState('');
  const searchHandler = (e) => {
    const searchWord = e.target.value;
    const newfilter = data.all.filter((book) => {
      return book.name.toLowerCase().includes(searchWord.toLowerCase());
    });
    if (searchWord === '') {
      setSearchData([]);
    } else {
      setSearchData(newfilter);
    }
  };

  return (
    <div className={styles.container}>
      <Circle backgroundColor="green" top="-10vh" left="-10vh" />
      <Circle backgroundColor="green" top="-10vh" left="-10vh" />
      <Circle backgroundColor="blue" top="-20vh" right="-10vh" />
      <Circle backgroundColor="green" top="-20vh" right="-10vh" />
      <div className={styles.card}>
        <h1 className={styles.title}>
          <span className={styles.brand}>TopiBooks</span> BEST EBOOK LIBRARY
        </h1>
        <p className={styles.desc}>
          Discover the best free online book library with all books in Pdf and
          Epub format
        </p>
      </div>
      <div className={styles.cardpic}>
        <Intropic />
      </div>
      <nav className={styles.search}>
        <div className={styles.wrapper}>
          <div className={styles.searchInput}>
            <input
              text="text"
              placeholder="Search"
              onChange={searchHandler}
              className={styles.input}
            />
            <div className={styles.autocomBox}>
              {searchData.length != 0 && (
                <div>
                  <div className={styles.dataResult}>
                    {searchData.slice(0, 5).map((book, key) => (
                      <a  href={`/all/${book.slug}`}>
                        <p>{book.name}</p>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}