import styles from './business.module.css'
import NewsCard from './../../components/NewsCard'

const CATEGORY = 'BUSINESS';

export default function Business() {
  return (
    <main className={styles.main}>
      <h1>{CATEGORY}</h1>
      <NewsCard category={CATEGORY} />
    </main>
  )
}