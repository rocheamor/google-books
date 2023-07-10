import styles from './BookModal.module.scss';
import placeholderImage from '../../assets/bookCover-placeholder.png'

const BookModal = ({ book, onClose }) => {
    const {title, authors, description, publisher, publishedDate} = book;
    const image = book.imageLinks?.thumbnail || placeholderImage;

    return (
    <>
    <div className={styles.modal}>
        <div className={styles.modalContent}>
            <div>
                <img className={styles.image} src={image} />
                <h4 className={styles.title}>{title}</h4>
                <p className={styles.moreInfo}>Author: {authors}</p>
                <p className={styles.moreInfo}>Publisher: {publisher}</p>
                <p className={styles.moreInfo}>Published Date: {publishedDate}</p>
                <div className={styles.descriptionContainer}>
                    {description}
                </div>
                <button className={styles.button} onClick={onClose}>Close</button>
            </div>
        </div>
    </div>
        <div className={styles.overlay}></div>
    </>
    );
  };
  
export default BookModal;