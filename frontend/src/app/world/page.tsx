import styles from './world.module.css'
import NewsCard from './../../components/NewsCard'

export default function World() {
  return (
    <main className={styles.main}>
      <h1>WORLD</h1>
      <NewsCard/>
    </main>
  )
}