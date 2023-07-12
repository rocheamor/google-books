import SearchBar from '../../components/SearchBar/SearchBar'
import Header from '../../components/Header/Header'
import styles from './LandingPage.module.scss';
import Description from '../../components/Description/Description';

const LandingPage = () => {
   
  return (
    <main className={styles.main}>
        <Header />
        <SearchBar/>
        <Description />

    </main>
  )
}

export default LandingPage