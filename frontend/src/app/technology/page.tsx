import styles from './technology.module.css'
import NewsCard from './../../components/NewsCard'

const CATEGORY = 'TECHNOLOGY';

export default function Technology() {
  return (
    <main className={styles.main}>
      <h1>{CATEGORY}</h1>
      <NewsCard category={CATEGORY} />
    </main>
  )
}