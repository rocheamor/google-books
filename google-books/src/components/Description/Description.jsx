import styles from './Description.module.scss'

const Description = () => {
  return (
    <div className={styles.description}>
        <p className={styles.first}>Books on the go!</p>
        <p className={styles.second}><i>Access your favourite books anytime, anywhere.</i></p>
    </div>
  )
}

export default Description