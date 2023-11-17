import styles from './science.module.css'
import NewsCard from './../../components/NewsCard'

const CATEGORY = 'SCIENCE';

export default function Science() {
  return (
    <main className={styles.main}>
      <h1>{CATEGORY}</h1>
      <NewsCard category={CATEGORY} />
    </main>
  )
}