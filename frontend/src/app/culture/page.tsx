import styles from './culture.module.css'
import NewsCard from './../../components/NewsCard'

const CATEGORY = 'CULTURE';


export default function Culture() {
  return (
    <main className={styles.main}>
      <h1>{CATEGORY}</h1>
      <NewsCard category={CATEGORY} />
    </main>
  )
}