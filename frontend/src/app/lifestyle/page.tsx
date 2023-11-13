import styles from './lifestyle.module.css'
import NewsCard from './../../components/NewsCard'

export default function Lifestyle() {
  return (
    <main className={styles.main}>
      <h1>LIFESTYLE</h1>
      <NewsCard/>
    </main>
  )
}