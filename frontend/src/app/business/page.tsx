import styles from './business.module.css'
import NewsCard from './../../components/NewsCard'

export default function Business() {
  return (
    <main className={styles.main}>
      <h1>BUSINESS</h1>
      <NewsCard/>
    </main>
  )
}