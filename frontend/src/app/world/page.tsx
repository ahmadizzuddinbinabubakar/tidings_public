import styles from './world.module.css'
import NewsCard from './../../components/NewsCard'

const CATEGORY = 'WORLD';

export default function World() {
  return (
    <main className={styles.main}>
      <h1>{CATEGORY}</h1>
      <NewsCard category={CATEGORY} />
    </main>
  )
}