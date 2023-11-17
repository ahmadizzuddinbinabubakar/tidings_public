import styles from './sports.module.css'
import NewsCard from './../../components/NewsCard'

const CATEGORY = 'SPORTS';

export default function Sports() {
  return (
    <main className={styles.main}>
      <h1>{CATEGORY}</h1>
      <NewsCard category={CATEGORY} />
    </main>
  )
}