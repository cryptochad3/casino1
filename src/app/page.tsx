import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>
        Welcome to <a href="https://nextjs.org">Next.js 14!</a>
      </h1>
      <p className={styles.description}>
        Get started by editing{' '}
        <code className={styles.code}>src/app/page.tsx</code>
      </p>
    </main>
  )
}
