import styles from './lifestyle.module.css'
import NewsCard from './../../components/NewsCard'

const CATEGORY = 'LIFESTYLE';

export default function Lifestyle() {
  return (
    <main className={styles.main}>
      <h1>{CATEGORY}</h1>
      <NewsCard category={CATEGORY} />
    </main>
  )
}