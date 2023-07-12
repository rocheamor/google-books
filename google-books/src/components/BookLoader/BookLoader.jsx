/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from 'react';
import BookList from '../BookList/BookList';
import fetchBooks from '../../services/book-services';
import styles from './BookLoader.module.scss';
import { useParams } from "react-router-dom";
import SearchBar from '../../components/SearchBar/SearchBar'
import Header from '../Header/Header';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
import Description from '../Description/Description'

const BookLoader = () => {
    const { searchTerm } = useParams();
    const [books, setBooks] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true)
    fetchBooks(searchTerm)
    .then((books) => {
      setBooks(books); 
      setLoading(false);
    })
    .catch((error) => setError(error))

  }, [searchTerm])
  
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div>
          <Header />
          <Description/>
        </div>
        <div>
          <SearchBar/>
        </div>
      </div>
      {loading ? <div className={styles.spinner}><LoadingSpinner /> </div> :
      <div className={styles.results}>
          {books.length > 0 ? <h5 className={styles.heading}>Search results for "{searchTerm}"</h5> : <h4 className={styles.heading}>No results found for "{searchTerm}"</h4>}
        </div>}
        {error && <p>{error.message}</p>}
        <BookList books={books} />
    </div>
  )
}

export default BookLoader

