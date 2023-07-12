import BookCard from '../BookCard/BookCard';
import styles from './BookList.module.scss';
import BookModal from '../BookModal/BookModal';
import { useState } from 'react';

const BookList = ({ books }) => {
  const [selectedBook, setSelectedBook] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (book) => {
      setSelectedBook(book);
      setIsModalOpen(true);
    };

    const closeModal = () => {
      setIsModalOpen(false);
    };

  return (
    <div>
      <ul className={styles.list}>
        {books.map((book, id) => (
           <BookCard key={id} book={book} onClick={() => openModal(book)}/>
        ))}
      </ul>
      
      {isModalOpen && <BookModal book={selectedBook} onClose={closeModal} />}
    </div>
  );
};

export default BookList;