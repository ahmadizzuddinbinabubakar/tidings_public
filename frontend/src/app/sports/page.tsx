import styles from './sports.module.css'
import NewsCard from './../../components/NewsCard'

export default function Sports() {
  return (
    <main className={styles.main}>
      <h1>SPORTS</h1>
      <NewsCard/>
    </main>
  )
}