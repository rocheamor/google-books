import { useState } from 'react';
import styles from './BookCard.module.scss';
import BookModal from '../BookModal/BookModal';
import placeholderImage from '../../assets/bookCover-placeholder.png'

const BookCard = ({ book }) => {

  const { title, authors } = book;
  const image = book.imageLinks?.thumbnail || placeholderImage;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.bookCard}>
      <div className={styles.bookCard__cover}>
        <div className={styles.bookCard__book}>
          <div className={styles.bookCard__bookFront}>
          <img className={styles.bookCard__img} src={image} alt={title} onClick={openModal} />
          </div>
          <div className={styles.bookCard__bookBack}></div>
          <div className={styles.bookCard__bookSide}></div>
        </div>
      </div>
      <div className={styles.info}> 
        <h4>{title}</h4>
        <p>{authors.join(', ')}</p>
        <button onClick={openModal}>More Info</button>
      </div> 
        {isModalOpen && <BookModal book={book} onClose={closeModal} />}
    </div>
  );
};

export default BookCard;