import Image from 'next/image'
import styles from './page.module.css'
import NewsCard from './../components/NewsCard';

//todo: theming
export default function Home() {
  return (
    <main className={styles.main}>
      <h1>TOP STORIES</h1>
      <NewsCard/>
      
    </main>
  )
}
