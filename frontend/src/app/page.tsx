import Image from 'next/image'
import styles from './page.module.css'
import NewsCard from './../components/NewsCard';

const CATEGORY = 'HEADLINES';

//todo: theming
export default function Home() {
  return (
    <main className={styles.main}>
      <h1>{CATEGORY}</h1>
      <NewsCard category={CATEGORY} />     
    </main>
  )
}
