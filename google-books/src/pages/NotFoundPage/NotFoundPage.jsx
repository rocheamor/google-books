/* eslint-disable react/no-unescaped-entities */
import notFoundPage from '../../assets/notFoundPage.jpg';
import Header from '../../components/Header/Header';
import styles from './NotFoundPage.module.scss';

export const NotFoundPage = () => {
    return (
      <main className={styles.main}>
        <Header />
        <h3>The page you're looking for doesn't exist</h3>
        <img className={styles.image} src={notFoundPage} alt='page not found' />
      </main>
    );
  };